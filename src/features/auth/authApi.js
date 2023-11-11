import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),

        addRestaurant: builder.mutation({
            query: (data) => ({
                url: "/add-restaurant",
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    //  localStorage.setItem(
                    //     "auth",
                    //     JSON.stringify({
                    //         accessToken: result.data.accessToken,
                    //         restaurant: result.data.restaurant,
                    //     })
                    // );

                } catch (err) {
                    // do nothing
                    console.log(err);
                }
            },
        }),
        
        // Contact
        contact: builder.mutation({
            query: (data) => ({
                url: "/contact",
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                     localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            contact: result.data.contact,
                        })
                    );

                } catch (err) {
                    // do nothing
                }
            },
        }),


        login: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },  
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),

    }),
});

export const { 
    useLoginMutation, 
    useRegisterMutation,
    useAddRestaurantMutation,
    useAboutMutation,
    useTermMutation,
    useContactMutation
} = authApi;
