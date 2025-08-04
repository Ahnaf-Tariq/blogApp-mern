"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface EmailData {
  email: string;
  date: string;
}

const page = () => {
  const [emails, setEmails] = useState<EmailData[]>([]);
  const fetchEmail = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/subscribe/list")
      console.log(response.data);
      if (response.data.success) {
        setEmails(response.data.emails);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in getting all emails subscription");
    }
  };

  useEffect(() => {
    fetchEmail();
  }, []);
  return (
    <div className="my-8 mx-12">
      <p className="py-2 text-lg font-semibold">All Emails</p>
      <div className="flex flex-col gap-2 border border-black">
        <div className="hidden md:grid grid-cols-[3fr_2fr_1fr] p-4 bg-gray-100 text-sm">
          <b>Email</b>
          <b>Date</b>
          <b className="text-center">Action</b>
        </div>
        {emails.map((email, index) => (
          <div
            className="grid grid-cols-[3fr_2fr_1fr] border-b-2 gap-2 p-4 text-sm"
            key={index}
          >
            <p className="font-semibold">{email.email}</p>
            <p>{new Date(email.date).toDateString()}</p>
            <p className="text-right md:text-center cursor-pointer text-lg">X</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
