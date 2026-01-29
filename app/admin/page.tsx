import { prisma } from "@/lib/prisma";
import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function AdminPage() {
    const session = await auth();

    // Double check protection (middleware should handle this, but for safety)
    if (!session || !(session.user as any).isAdmin) {
        redirect("/");
    }

    const users = await prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div className="min-h-screen p-8 md:p-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-exo text-primary mb-8 tracking-widest border-b border-primary/30 pb-4">
                    [ADMIN_OVERRIDE] // SYSTEM_USERS
                </h1>

                <div className="bg-background/50 border border-secondary/30 backdrop-blur-sm overflow-hidden rounded-sm">
                    <table className="w-full text-left font-mono text-sm">
                        <thead className="bg-secondary/10 text-secondary uppercase tracking-wider">
                            <tr>
                                <th className="p-4 border-b border-secondary/30">ID_HASH</th>
                                <th className="p-4 border-b border-secondary/30">IDENTITY (EMAIL)</th>
                                <th className="p-4 border-b border-secondary/30">ROLE</th>
                                <th className="p-4 border-b border-secondary/30">CREATED_AT</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary/20">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-secondary/5 transition-colors">
                                    <td className="p-4 font-mono text-secondary/70">{user.id.slice(0, 8)}...</td>
                                    <td className="p-4 text-foreground">{user.email}</td>
                                    <td className="p-4">
                                        {user.isAdmin ? (
                                            <span className="text-primary border border-primary px-2 py-0.5 text-xs">ADMIN</span>
                                        ) : (
                                            <span className="text-secondary/50 border border-secondary/50 px-2 py-0.5 text-xs">USER</span>
                                        )}
                                    </td>
                                    <td className="p-4 text-secondary/70">{user.createdAt.toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
