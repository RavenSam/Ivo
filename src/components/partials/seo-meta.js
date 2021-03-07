import Head from "next/head"
import site from "../../config/site"

export default function Meta(props) {
   return (
      <Head>
         <title>{props.title}</title>
         <meta name="og:title" property="og:title" content={props.title} />
         <meta name="twitter:title" content={props.title} />
         <meta name="description" content={props.desc} />
         <meta name="og:description" property="og:description" content={props.desc} />
         <meta name="twitter:description" content={props.desc} />
         <meta name="twitter:card" content="summary" />
         <meta property="og:type" content="website" />
         <meta property="og:site_name" content={site.name} />
         <meta property="og:url" content="" />
         <meta name="twitter:site" content="" />
         <meta name="twitter:creator" content="" />
         <link rel="icon" type="image/png" href={site.favicon} />
         <link rel="apple-touch-icon" href={site.favicon} />
         {props.image ? (
            <meta property="og:image" content={`${props.image}`} />
         ) : (
            <meta property="og:image" content={site.logo.light} />
         )}
         {props.image && <meta name="twitter:image" content="" />}
         {props.canonical && <link rel="canonical" href="" />}
      </Head>
   )
}
