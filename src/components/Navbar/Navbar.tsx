"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { User } from "next-auth";

function Navbar() {
  const { data: session } = useSession();
  const user: User = session?.user;

  return (
    <nav className="md:py-3 md:px-6 shadow-md bg-blue-500 text-white rounded-br-xl rounded-bl-xl fixed w-screen py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2">
        <a href="#" className=" text-xl font-bold md:mb-0">
          Feedbackify
        </a>
        {session ? (
          <>
            <div className="mr-4">Welcome, {user.username || user.email}</div>

            <Button
              onClick={() => signOut()}
              className="w-full md:w-auto bg-slate-100 text-black px-4"
              variant="outline"
            >
              Logout
            </Button>
          </>
        ) : (
          <Link href="/sign-up">
            <Button
              className="w-full text-lg md:w-auto bg-slate-100 text-black px-6 h-full flex justify-center items-center"
              variant={"outline"}
            >
              Register
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
