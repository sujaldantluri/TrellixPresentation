document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById("severityResult");
    result.style.display = 'none'; 
});

function calculateSeverity() {
    const impactScope = parseInt(document.getElementById("impactScope").value);
    const dataIntegrity = document.getElementById("dataIntegrity").value;
    const securityRisk = document.getElementById("securityRisk").value;
    const complianceConcern = document.getElementById("complianceConcern").value;

    let severityScore = 0;

    // Impact Scope Scoring
    if (impactScope >= 75) severityScore += 5;
    else if (impactScope >= 25) severityScore += 3;
    else severityScore += 1;

    // Data integrity Scoring
    if (dataIntegrity === "significant") severityScore += 3;
    else if (dataIntegrity === "partial") severityScore += 2;
    else severityScore += 0 ;

    // Security risk Scoring
    if (securityRisk === "high") severityScore += 4;
    else if (securityRisk === "medium") severityScore += 2;
    else severityScore += 1;

    // Compliance Concern Scoring (Governmental regulations that cause taxes if there is an outage)
    if (complianceConcern === "high") severityScore += 3;
    else if (complianceConcern === "low") severityScore += 2;
    else severityScore += 0;

    // Determine Severity Level
    let severityLevel = "";
    if (severityScore >= 10) severityLevel = "S1 - Critical";
    else if (severityScore >= 8) severityLevel = "S2 - High";
    else if (severityScore >= 5) severityLevel = "S3 - Moderate";
    else if (severityScore >= 3) severityLevel = "S4 - Low";
    else severityLevel = "S5 - Informational";

    // Display 
    const result = document.getElementById("severityResult");
    result.innerText = "Severity Level: " + severityLevel;
    result.style.display = 'block';
}
