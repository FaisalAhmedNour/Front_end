
const SignIn = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        fetch('http://localhost:3309/public/login', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({email, password})
        })
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="my-5 mx-auto max-w-5xl grid grid-cols-3">
            <div className="flex items-center">
                <div className="mx-auto w-80">
                    <h3>UICommercial</h3>
                    <p className="underline">Recent Sign In:</p>
                    <div className="grid grid-cols-4">
                        <p>Device</p>
                        <p className="col-span-3">Reza/23AEC51E-2963-4419</p>
                        <p>Date</p>
                        <p className="col-span-3">15-Oct=2022</p>
                        <p>Time</p>
                        <p className="col-span-3">12:34 PM</p>
                        <p>IP</p>
                        <p className="col-span-3">174.134.10.124</p>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <p className="border my-5 px-5 text-[#c4a6a6]">Massage area</p>
                <div className="mx-auto border text-center py-5">
                    <button className="px-4 py-2 bg-[#5b9bd5] text-white">Logo</button>
                    <p>&quot;Sign in to your UiCommercial Account&quot;</p>
                    <form onSubmit={handleSubmit} className="grid grid-cols-3 w-96 mx-auto gap-y-2 my-5">
                        <p className="text-start">Email</p>
                        <input type="email" placeholder="Enter email" name="email" className="input border-2 rounded col-span-2" required />
                        <p className="text-start">Password</p>
                        <input type="password" placeholder="********" name="password" className="input border-2 rounded col-span-2" required />
                        <p className="text-center col-span-3 underline text-[#3075cf]">Forgot password</p>
                        <input type="submit" value="Sign In" className="w-full col-span-3 bg-[#01aa4f] text-white rounded" />
                    </form>
                    <p className="">Don’t have a UiCommercial account? <span className="text-[#3075cf]">Sign up</span></p>
                    <hr className="w-96 mx-auto border my-5" />
                    <button className="col-span-3 bg-[#2c74b3] text-white rounded w-96 mx-auto">Create New Account</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;