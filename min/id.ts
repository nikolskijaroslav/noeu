type Target = string;

function logTarget(target: Target): void {
  console.log("Target is:", target);
}

const myTarget: Target = "http://example.com";
logTarget(myTarget); // Output: Target is: http://example.com
