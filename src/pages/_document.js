import Document, {Html, Head, Main, NextScript} from "next/document";
import React from "react";

export default class PlanoDeMarketingDocument extends Document {

    render() {
        return (
            <Html lang="pt-br">

                <Head>
                    <meta charSet="utf-8"/>                                      
                </Head>

                <body>                   
                    <Main />
                    <NextScript/>
                </body>
                
            </Html>
        )
    }
}