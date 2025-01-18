# context explanation

import { useContext, useEffect, useState } from "react";

/\*
creates a context object, a container for for values that need
to be shared throughout the app, context object will hold the state
and functions that can be accessed by any component
in the component tree

helps avoid prop drilling dont need to pass props
through every single component
consume context where the data is needed
\*/
const videoContext = createContext();

// custom hook to access the context
/\*
makes it easier to access the the context inside components
It uses useContext(VideoContext) which is another React hook
that gives you access to the value stored in the context (VideoContext).

This custom hook abstracts the logic of calling useContext and makes it
cleaner to use the context throughout your app.
Why a custom hook:
By using a custom hook like useVideos,
you centralize the logic of accessing the context and make it reusable.
This means that instead of writing useContext(VideoContext) every time,
you just call useVideos().

Use case: Any component that needs to access
video data (e.g., trending videos, bookmarked videos) can use
useVideos()
\*/
export const useVideosContext = () => {
return useContext(videoContext);
};

// the provider component

const videoProvider = ({ chilren }) => {
const [trendingVideos, setTrendingVideos] = useState();

useEffect(() => {
// fetch the videos here
const getTrendingVideos = async()=>{
const response = await axios.get("")
}
}, []);

return (
<videoContext.Provider value={{ trendingVideos, setTrendingVideos }}>
{children}
</videoContext.Provider>
);
};
