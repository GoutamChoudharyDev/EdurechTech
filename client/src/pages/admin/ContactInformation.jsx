import { useState } from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import Topbar from "../../components/AdminComponents/Topbar";
import ContactTable from "../../components/AdminComponents/ContactTable";

const ContactInformation = () => {
    // useState
    const [open, setOpen] = useState(false);
    const [fetching, setFetching] = useState(true);

    return (
        <div className="flex min-h-screen bg-slate-50 overflow-hidden">

            {/* Sidebar */}
            <Sidebar open={open} />

            {/* Mobile Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            <main className="flex-1 flex flex-col overflow-hidden">

                {/* Topbar */}
                <Topbar open={open} setOpen={setOpen} />

                <div className="p-4 md:p-2 overflow-y-auto">

                    {/* Loading */}
                    {/* {fetching ? (
                        <div className="flex items-center justify-center py-20">
                            <div className="text-gray-500 text-lg">
                                Loading Contact details...
                            </div>
                        </div>
                    ) : (
                        <div className="mx-auto max-w-3xl">
                            
                        </div>
                    )} */}

                    <ContactTable />
                </div>
            </main>
        </div>
    )
}

export default ContactInformation;
