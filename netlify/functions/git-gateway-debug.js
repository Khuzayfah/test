// Fungsi untuk debugging Git Gateway
exports.handler = async function(event, context) {
  console.log('Git Gateway Debug Function Triggered');
  console.log('Identity User:', context.clientContext?.user);
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Git Gateway Debug Info",
      identity: context.clientContext?.user ? "Authenticated" : "Not Authenticated",
      userInfo: context.clientContext?.user || "No user info available",
      netlifyEnv: process.env.NETLIFY || "Not running on Netlify",
      time: new Date().toISOString()
    })
  };
}; 