"use client";
import { useAuthStore } from "@/store/authStore";
import React from "react";

const Dashboard = () => {
  const { user } = useAuthStore();
  return <div>{user?.email}</div>;
};

export default Dashboard;
