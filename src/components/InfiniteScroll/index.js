import React, { useState, useEffect } from "react";

const handleScroll = () => console.log("scroll");

const InfiniteScroll = () => {
  useEffect(() => {
    console.log("add scroll listener");
    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("remove scroll listener");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default InfiniteScroll;
