import React from "react";
import { Link, Outlet } from "react-router-dom";

//navbar
function Navbar() {
	var a = document.createElement("a");
	a.href = window.location.href;
	console.log(a);
	// [
	// 	"href",
	// 	"protocol",
	// 	"host",
	// 	"hostname",
	// 	"port",
	// 	"pathname",
	// 	"search",
	// 	"hash",
	// ].forEach(function (k) {
	// 	console.log(k + ":", a[k]);
	// });
	console.log(a.href[5]);
	let url1 = "/profile";

	return (
		<>
			<div className="right">
				<div className="navbar">
					<div className="logo">
						<Link to="/">
							<h1 className="logo-text">Fitness Tracker</h1>
						</Link>
					</div>

					<div className="links">
						{url1 === "/profile" ? (
							<>
								<Link to="/login">
									<h2>Login</h2>
								</Link>
								<Link to="/register">
									<h2>Register</h2>
								</Link>
							</>
						) : (
							<Link to="/profile">
								<h2>Profile</h2>
							</Link>
						)}
						{/* <Link to="/login">
							<h2>Login</h2>
						</Link>
						<Link to="/register">
							<h2>Register</h2>
						</Link> */}
					</div>
				</div>
				<Outlet />
			</div>
		</>
	);
}

export default Navbar;
