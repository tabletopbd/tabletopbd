import { useSelector } from "react-redux";

export default function useAuth() {
    const auth = useSelector((state) => state.auth);

    // console.log("useAuth: Token-> ", auth.accessToken);
    // console.log("useAuth: user-> ",auth.user);

    if (auth?.accessToken && auth?.user) {
        return true;
    } else {
        return false;
    }
}
