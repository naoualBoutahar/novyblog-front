import React from "react";
import Intro from "../components/Intro";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/SignIn");
  }, []);
  return null;
}
