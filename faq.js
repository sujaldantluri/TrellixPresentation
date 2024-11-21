const chatMessages = document.getElementById("chatMessages");

function handleOptionSelect() {
    const select = document.getElementById("faqOptions");
    const selectedOption = select.value;

    if (!selectedOption) return;

    // User message
    addMessage(selectedOption, "user");

    // Bot response based on selection
    let response;
    switch (selectedOption) {
        case "What is XDR?":
            response = "Trellix XDR (Extended Detection and Response) integrates data from multiple security layers, helping detect and respond to threats across endpoints, networks, and cloud environments.";
            break;
        case "What is the difference between XDR and EDR?":
            response = "While EDR focuses on endpoint-specific threat detection, XDR extends coverage to the entire system, offering a more comprehensive approach to threat detection.";
            break;
        case "How can Trellix help with threat detection?":
            response = "Trellix’s XDR platform uses AI-driven analytics to detect threats, reducing false positives and alert fatigue for security teams.";
            break;
        case "What is endpoint security?":
            response = "Endpoint security protects individual devices, like computers and mobile phones, against threats. Trellix’s EDR solution provides continuous monitoring and response for endpoints.";
            break;
        case "Why should I use threat intelligence?":
            response = "Threat intelligence provides insights into emerging threats, helping your organization defend against new attacks. Trellix integrates threat intelligence into its solutions for real-time updates.";
            break;
        case "What types of attacks can Trellix help prevent?":
            response = "Trellix solutions are designed to detect and respond to a range of threats, including malware, ransomware, phishing, and advanced persistent threats.";
            break;
        case "How does Trellix handle alert fatigue?":
            response = "Trellix uses machine learning to filter out false positives and prioritize high-risk alerts, allowing your team to focus on signiicant threats.";
            break;
        case "Does Trellix support cloud security?":
            response = "Yes, Trellix XDR and other solutions support cloud environments, providing visibility, threat detection, and response capabilities for cloud-based assets.";
            break;
        case "Can Trellix help with regulatory compliance?":
            response = "Yes, Trellix’s tools offer detailed logs and compliance reporting, helping your organization meet regulatory standards.";
            break;
        case "Other":
            response = "For additional assistance, please contact us at support@trellix.com.";
            break;
        default:
            response = "I'm sorry, I didn't understand your question.";
    }

    addMessage(response, "bot");
    select.value = ""; // Reset the dropdown after selection
}

function addMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", sender === "user" ? "user-message" : "bot-message");
    messageElement.textContent = text;
    chatMessages.appendChild(messageElement);

    // Scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
