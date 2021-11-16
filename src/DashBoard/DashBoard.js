import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { HashLink } from "react-router-hash-link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import ReviewsIcon from '@mui/icons-material/Reviews';
import { NavLink } from "react-router-dom";
import { Image, Navbar } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Pay from "./User/Pay/Pay";
import MyOrders from "./User/MyOrders/MyOrders";
import Review from "./User/Review/Review";
import AdminRoute from "./Admin/AdminRoute/AdminRoute";
import ManageProducts from "./Admin/ManageProducts/ManageProducts";
import ManageAllOrders from "./Admin/ManageAllOrders/ManageAllOrders";
import MakeAdmin from "./Admin/MakeAdmin/MakeAdmin";
import AddProduct from "./Admin/AddProduct/AddProduct";



const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar className="bg-success layout-top">
                    <>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: "none" }) }}
                        >
                            <MenuIcon />
                            {/* <Image
                                width="40px"
                                height="40px"
                                src=""
                                fluid
                            /> */}
                            <span className="fs-1 fw-bold">RIDEBULL</span>
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                        ></Typography>
                    </>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
                
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem button>
                        <Box>
                            <ListItemIcon>
                                <NavLink
                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                        marginLeft: "5px",
                                    }}
                                    to="/home"
                                >
                                    Home
                                </NavLink>
                            </ListItemIcon>
                        </Box>
                    </ListItem>

                    {admin && (
                        <Box>
                            <ListItem button>
                                <ListItemIcon>
                                    <NavLink
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                            marginLeft: "5px",
                                        }}
                                        to={`${url}/makeAdmin`}
                                    >
                                        Make Admin
                                    </NavLink>
                                </ListItemIcon>
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>
                                    <NavLink
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                            marginLeft: "5px",
                                        }}
                                        to={`${url}/manageProducts`}
                                    >
                                        Manage Products
                                    </NavLink>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <NavLink
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                            marginLeft: "5px",
                                        }}
                                        to={`${url}/addProduct`}
                                    >
                                        Add A Product
                                    </NavLink>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <NavLink
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                            marginLeft: "5px",
                                        }}
                                        to={`${url}/manageAllOrders`}
                                    >
                                        Manage All Orders
                                    </NavLink>
                                </ListItemIcon>
                            </ListItem>
                        </Box>
                    )}
                    {!admin && (
                        <>
                            <NavLink
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                    marginLeft: "5px",
                                }}
                                to={`${url}/pay`}
                            >
                            <ListItem button>
                                <ListItemIcon>
                                        Pay
                                </ListItemIcon>
                            </ListItem>
                            </NavLink>
                            
                            <NavLink
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                    marginLeft: "5px",
                                }}
                                to={`${url}/myOrders`}
                            >
                            <ListItem button>
                                <ListItemIcon>
                                        My Orders
                                </ListItemIcon>
                            </ListItem>
                            </NavLink>
                            <NavLink
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                    marginLeft: "5px",
                                }}
                                to={`${url}/review`}
                            >
                            <ListItem button>
                                <ListItemIcon>
                                        Review
                                </ListItemIcon>
                            </ListItem>
                            </NavLink>
                        </>
                    )}


                    <NavLink
                        style={{
                            textDecoration: "none",
                            color: "black",
                            marginLeft: "5px",
                        }}
                        onClick={logOut}
                        as={HashLink}
                        to="/logIn"
                    >
                        <ListItem button>
                        <ListItemIcon>
                            Logout
                        </ListItemIcon>
                        </ListItem>
                    </NavLink>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                       
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                </Switch>
            </Box>
            <Main open={open}>
                <DrawerHeader />
                <Typography paragraph>
                    {/* ============================== */}
                </Typography>
                <Typography paragraph>
                    {/* ============================== */}
                </Typography>
            </Main>
        </Box>
    
    );
};

export default Dashboard;