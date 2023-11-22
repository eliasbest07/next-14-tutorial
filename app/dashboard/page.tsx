import { Suspense } from "react";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "../lib/data"
import { Card } from "../ui/dashboard/cards";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { lusitana, Edubiginner } from "../ui/fonts";
import { RevenueChartSkeleton } from "../ui/skeletons";

export default async function Page(){
    // const res=  await fetch('');
    const latestInvoices = await fetchLatestInvoices();
    const dataCard = await fetchCardData();
    
    console.log(dataCard);
    const  { totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers} = dataCard;
    return (
      <main>
          <h1 className={`${Edubiginner.className} mb-4 text-6xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense fallback={<RevenueChartSkeleton/>}>
        <RevenueChart   />
      </Suspense>
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
        
      </main>  
    );
    
}