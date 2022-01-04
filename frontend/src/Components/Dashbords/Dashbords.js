import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Dashbords.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

const Dashbords = (props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			{/* <Toolbar /> */}
			<div className="sidebar">
				<div className="sidebarWrapper">
					<div className="sidebarMenu">
						<ul className="sidebarList">
							<Link to="/dashboard/manage-news/" className="link">
								<li className="sidebarListItem">
									<LineStyleIcon className="sidebarIcon" />
									Manage News
								</li>
							</Link>
							<Link
								to="/dashboard/publish-news/"
								className="link"
							>
								<li className="sidebarListItem ">
									<LineStyleIcon className="sidebarIcon" />
									Publish News
								</li>
							</Link>

							<Link to="/dashboard/make-admin/" className="link">
								<li className="sidebarListItem">
									<TrendingUpIcon className="sidebarIcon" />
									Make Admin
								</li>
							</Link>
							<Link
								to="/dashboard/panding-news/"
								className="link"
							>
								<li className="sidebarListItem">
									<TrendingUpIcon className="sidebarIcon" />
									Pending News
								</li>
							</Link>
							<Link
								to="/dashboard/user-analytics/"
								className="link"
							>
								<li className="sidebarListItem">
									<TrendingUpIcon className="sidebarIcon" />
									User Analytics
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				// justifyContent= 'end'
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<div className="topbar">
						<div className="topbarWrapper">
							<div className="topLeft">
								<span className="logo__des">Bengal</span>
							</div>
							<div className="topRight">
								<div className="topbarIconContainer">
									<LogoutIcon />
								</div>
							</div>
						</div>
					</div>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				{/* <DeshHome />  */}
				<Outlet />
			</Box>
		</Box>
	);
};

export default Dashbords;
