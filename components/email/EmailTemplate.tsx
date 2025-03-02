import { ContactFormData } from "@/schemas/ContactFormSchema";
import * as React from "react";

export const EmailTemplate = ({
  name,
  surname,
  email,
  subject,
  message,
}: ContactFormData) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      lineHeight: 1.6,
      color: "#333",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
    }}
  >
    <div
      style={{
        border: "1px solid #e1e1e1",
        borderRadius: "5px",
        padding: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          backgroundColor: "#4a5568",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px 5px 0 0",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "24px" }}>
          New Contact Form Submission
        </h1>
      </div>

      <div style={{ padding: "0 20px" }}>
        <div style={{ marginBottom: "15px" }}>
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "5px",
              color: "#4a5568",
            }}
          >
            From:
          </div>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "3px",
              border: "1px solid #e1e1e1",
            }}
          >
            {name} {surname} ({email})
          </div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "5px",
              color: "#4a5568",
            }}
          >
            Subject:
          </div>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "3px",
              border: "1px solid #e1e1e1",
            }}
          >
            {subject}
          </div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "5px",
              color: "#4a5568",
            }}
          >
            Message:
          </div>
          <div
            style={{
              backgroundColor: "white",
              padding: "15px",
              borderRadius: "3px",
              border: "1px solid #e1e1e1",
              whiteSpace: "pre-wrap",
            }}
          >
            {message}
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          fontSize: "12px",
          color: "#666",
          textAlign: "center",
          borderTop: "1px solid #e1e1e1",
          paddingTop: "15px",
        }}
      >
        <p>This email was sent from the contact form on your website.</p>
        <p>Timestamp: {new Date().toLocaleString()}</p>
      </div>
    </div>
  </div>
);
