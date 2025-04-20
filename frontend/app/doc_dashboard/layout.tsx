"use client";  // Add this directive at the top of the file

import Link from "next/link";
import { usePathname } from "next/navigation";  // Import both from next/navigation, not next/router
import { ReactNode } from "react";


type DashboardProps = {
    children: ReactNode;
  };

export default function Dashboard({children}:DashboardProps){
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
                        Patients
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
                        Doctor Profile
                    </Link>
                    <Link 
                        href="/doc_dashboard/Emergency" 
                        className={`font-semibold ${pathname === '/doc_dashboard/Emergency' ? 'text-blue-600' : 'hover:text-blue-600'}`}
                    >
                        Emergency Case
                    </Link>
                    <Link 
                        href="/doc_dashboard/Inventory" 
                        className={`font-semibold ${pathname === '/doc_dashboard/Inventory' ? 'text-blue-600' : 'hover:text-blue-600'}`}
                    >
                        Inventory
                    </Link>
                    <Link 
                        href="/doc_dashboard/Records" 
                        className={`font-semibold ${pathname === '/doc_dashboard/Records' ? 'text-blue-600' : 'hover:text-blue-600'}`}
                    >
                        Records
                    </Link>
                    <Link 
                        href="/doc_dashboard/Shift" 
                        className={`font-semibold ${pathname === '/doc_dashboard/Shift' ? 'text-blue-600' : 'hover:text-blue-600'}`}
                    >
                        Shift
                    </Link>

                    <Link 
                        href="/doc_dashboard/Receptionist" 
                        className={`font-semibold ${pathname === '/doc_dashboard/Receptionist' ? 'text-blue-600' : 'hover:text-blue-600'}`}
                    >
                        Receptionist Profile
                    </Link>

                    <form method="POST" action="/auth/logout" className="inline">
                        <button
                            type="submit"
                            className="text-sm text-gray-700 hover:text-red-600 font-semibold transition duration-200 ease-in-out bg-transparent border-none p-0 m-0 cursor-pointer"
                        >
                            Logout
                        </button>
                        </form>

                </nav>
            </aside>

            {/* Main Content - Changes based on route */}
            <main className="flex-1 p-10">
                {children}
            </main>
        </div>
    );
}