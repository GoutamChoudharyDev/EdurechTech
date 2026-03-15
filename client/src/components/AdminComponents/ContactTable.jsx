import { useEffect, useState } from "react";
import api from "../../service/api";
import { toast } from "react-toastify";

const ContactTable = () => {
    // useState
    const [contacts, setContacts] = useState([]);

    // get all contacts
    const getAllContacts = async () => {
        try {
            const response = await api.get("/api/admin/contact");
            console.log("response", response);

            setContacts(response.data.contacts);
            toast.success("fetching contacts successfully");
        } catch (error) {
            console.log("Error fetching contacts", error);
            toast.error(
                error.response?.data?.message || "Internal server error to fetch contacts"
            );
        }
    }

    // useEffect
    useEffect(() => {
        getAllContacts();
    }, [])

    return (
        <div className="bg-white shadow-lg rounded-xl overflow-x-auto">
            <table className="min-w-full text-sm text-left">

                {/* Table Header */}
                <thead className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white">
                    <tr>
                        <th className="px-6 py-3 font-semibold">Name</th>
                        <th className="px-6 py-3 font-semibold">Email</th>
                        <th className="px-6 py-3 font-semibold">Contact Number</th>
                        <th className="px-6 py-3 font-semibold">Service</th>
                        <th className="px-6 py-3 font-semibold">Message</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-200">
                    {contacts.map((contact) => (
                        <tr
                            key={contact._id}
                            className="hover:bg-orange-50 transition"
                        >
                            <td className="px-6 py-4 font-medium text-gray-800">
                                {contact.name}
                            </td>
                            <td className="px-6 py-4 text-gray-700">
                                {contact.email}
                            </td>
                            <td className="px-6 py-4 text-gray-700">
                                {contact.contactNumber}
                            </td>
                            <td className="px-6 py-4 capitalize text-gray-700">
                                {contact.service}
                            </td>
                            <td className="px-6 py-4 text-gray-700">
                                {contact.message}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default ContactTable;