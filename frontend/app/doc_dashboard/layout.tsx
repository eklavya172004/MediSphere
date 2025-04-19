"use client";  // Add this directive at the top of the file

import Link from "next/link";
import { usePathname } from "next/navigation";  // Import both from next/navigation, not next/router

export default function Dashboard({children}){
    // const router = useRouter();
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar - Always visible */}
            <aside className="w-64 bg-white shadow-md p-6">
                <h2 className="text-2xl font-bold mb-10">MediSphere</h2>
                <nav className="flex flex-col gap-4">
                    <Link 
                        href="/doc_dashboard/patient" 
                        className={`font-semibold ${pathname === '/doc_dashboard/patients' ? 'text-blue-600' : 'hover:text-blue-600'}`}
                    >
                        Patient Records
                    </Link>
                    <Link 
                        href="/doc_dashboard/prescription" 
                        className={`font-semibold ${pathname === '/doc_dashboard/prescriptions' ? 'text-blue-600' : 'hover:text-blue-600'}`}
                    >
                        Prescriptions
                    </Link>
                    <Link 
                        href="/doc_dashboard/profile" 
                        className={`font-semibold ${pathname === '/doc_dashboard/profile' ? 'text-blue-600' : 'hover:text-blue-600'}`}
                    >
                        Profile
                    </Link>
                    <Link 
                        href="/logout" 
                        className="hover:text-red-600 font-semibold"
                    >
                        Logout
                    </Link>
                </nav>
            </aside>

            {/* Main Content - Changes based on route */}
            <main className="flex-1 p-10">
                {children}
            </main>
        </div>
    );
}