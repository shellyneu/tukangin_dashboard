"use client";
import Sidebar from "@/components/sidebar";
import Table from "@/components/table";
import React from "react";

const Admin = () => {
  const handleBack = () => {};
  return (
    <div className="flex bg-WHITE h-screen">
      <Sidebar />
      <div className="gap-10">
        <button
          onClick={handleBack}
          className="mt-4 ml-4 py-2 px-4 bg-PRIMARY text-WHITE rounded-md cursor-pointer"
        >
          Back
        </button>
        <Table />
      </div>
    </div>
  );
};

export default Admin;
