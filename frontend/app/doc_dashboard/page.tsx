
'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// 
export default function DashboardPage(){
  const router = useRouter();

  useEffect(() => {
    
    router.push("/doc_dashboard/patient");

  },[router])

  return (
    <div>Redirecting...</div>
  );
}