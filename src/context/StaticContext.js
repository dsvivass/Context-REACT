import React from "react";

const Context = React.createContext({
    message: "Don't have permission", // In case somebody without the provider tries to access the context
});

export default Context;