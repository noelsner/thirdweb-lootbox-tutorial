import axios from "axios";
import { FormEvent, useState } from "react";
import {
  CheckAnswerPayload,
  CheckAnswerResponse,
} from "../pages/api/check-answer";
import PrimaryButton from "./primary-button";
import invariant from "tiny-invariant";
import { useWeb3 } from "@3rdweb/hooks";

export default function QuizQuestion() {
  const [email, setEmail] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const { address, provider } = useWeb3();

  if (!address) {
    return <div className="text-gray-100">Please connect your wallet</div>;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      invariant(email.length > 0, "Email is required to submit");

      invariant(provider !== undefined, "Provider is required to submit");

      const message =
        "Please sign this message to confirm your identity and submit the answer.This won't cost any gas!";
      const signedMessage = await provider.getSigner().signMessage(message);

      const payload: CheckAnswerPayload = {
        address,
        email,
        message,
        signedMessage,
      };

      const checkResponse = await axios.post("/api/check-answer", payload);
      const result = checkResponse.data as CheckAnswerResponse;

      if (result.kind === "error") {
        console.log(result.error);
      }

      if (result.kind === "correct") {
        console.log("email found");
      }

      if (result.kind === "incorrect") {
        console.log(result.kind);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col gap-8">
      <fieldset>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-lg text-gray-100">
            Please enter your email address
          </label>
          <input
            className="max-w-fit px-4 py-2 border-2 border-transparent text-sm font-medium rounded-lg shadow-sm text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-80 disabled:pointer-events-none"
            type="email"
            name="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </fieldset>
      <PrimaryButton type="submit" onClick={handleSubmit} disabled={submitting}>
        {submitting ? "Submitting..." : "SUBMIT 🚀"}
      </PrimaryButton>
    </form>
  );
}
