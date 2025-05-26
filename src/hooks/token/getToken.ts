import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { userToken } from "@/types/tokens.type";

export default function useAuthToken() {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [decodedToken, setDecodedToken] = useState<userToken | null>(null);
  const [tokenLoading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setAuthToken(token);

    if (token) {
      try {
        const decoded: userToken = jwtDecode(token);
        setDecodedToken(decoded);
        setLoading(false);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    } else {
      setDecodedToken(null);
      toast.error("You are not authenticated");
      router.push("/login");
    }
  }, []);

  return { authToken, decodedToken, tokenLoading };
}
