import { PrismaClient } from '@prisma/client'
import { PrismaD1 } from '@prisma/adapter-d1'
import { getRequestContext } from '@cloudflare/next-on-pages'

// Helper to determine if we are in a Cloudflare environment
const isCloudflare = () => {
    try {
        return !!getRequestContext().env.DB;
    } catch {
        return false;
    }
}

const prismaClientSingleton = () => {
    // If running on Cloudflare (Edge), use the D1 adapter
    if (isCloudflare()) {
        const adapter = new PrismaD1(getRequestContext().env.DB)
        return new PrismaClient({ adapter })
    }

    // Otherwise (Local Node.js), use standard SQLite provider
    return new PrismaClient()
}

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
