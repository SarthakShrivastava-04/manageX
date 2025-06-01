"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2, AlertCircle, UsersIcon, Plus, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
    street: string;
    zipcode: string;
  };
  website: string;
  company: {
    name: string;
  };
}

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.address.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [users, searchTerm]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch users. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-gray-600 dark:text-gray-400" />
          <span className="text-lg text-gray-600 dark:text-gray-400">
            Loading users...
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="border-2 rounded-xl">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription className="text-base">{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 mt-2">
            Manage and view all users in your system
          </p>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
          <UsersIcon className="h-5 w-5" />
          <span className="font-medium">{filteredUsers.length} users</span>
        </div>
      </div>

      <div className="flex relative items-center justify-between">
        <div>
            <SearchIcon className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search by name or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-base rounded-xl border-2 focus:border-black dark:focus:border-white"
            />
          </div>
        <Link href="/dashboard/add">
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border-2"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add user
              </Button>
            </Link>
      </div>

      <div className="relative max-w-7xl flex justify-center ">
        <div className="flex justify-between">
          
          <div>
            
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="card-hover border-2 rounded-2xl">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-black dark:text-white">
                    {user.name}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="px-3 py-1 rounded-lg font-medium"
                  >
                    #{user.id}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Email
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {user.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Phone
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {user.phone}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      City
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {user.address.city}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Company
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {user.company.name}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredUsers.length === 0 && searchTerm && (
        <div className="text-center py-12">
          <UsersIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-400">
            No users found matching your search.
          </p>
        </div>
      )}
    </motion.div>
  );
}
