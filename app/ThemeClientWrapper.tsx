"use client";

import { useEffect, useState } from "react";

export function ThemeClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering until after mount
  if (!mounted) {
    return null;
  }

  return <>{children}</>;
}
