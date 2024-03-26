"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import data from "../data";

const Table = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/transactions`
        );
        setItems(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID Transaksi
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID Pengguna
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID Tukang
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Tanggal
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Bukti Transaksi
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.isArray(items) && items.length > 0 ? (
            items.map((item, index) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.userId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.tukangId}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(item.date).toLocaleDateString("en-GB")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={item.bukti}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lihat Bukti
                  </a>
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap ${
                    item.status === "Pengajuan"
                      ? "text-blue-500"
                      : item.status === "Pengerjaan"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  {item.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {(item.action === null || item.action === "Terima") && (
                    <button className="text-blue-500">Terima</button>
                  )}
                  {item.action === "Selesai" && (
                    <button className="text-green-500">Selesai</button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="px-6 py-4 text-center text-black">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
