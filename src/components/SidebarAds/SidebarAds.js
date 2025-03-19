import React from "react";

export default class AdsComponent extends React.Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
<ins className="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-8428579577454018"
     data-ad-slot="1502322343"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
        );
    }
}