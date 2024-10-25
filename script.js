//your JS code here. If required.
document.getElementById("btn").addEventListener("click",async()=>{
	const text=document.getElementById("text").value
	const delay=document.getElementById("delay").value

	if(text&&delay){
		function promise(){
			return new Promise((resolve)=>{
				setTimeout(()=>{
					resolve(text)
				},delay)
			})
		}

		const data= await promise()
		if(data){
			document.getElementById("output").innerText=data
		}
		
	}
	
})