import React, {FC, ReactElement} from 'react'
import Head from 'next/head'

interface Props {
    title?: string
    description?: string
    image?: string
    icon?: string
    keywords?: string
}

const Seo: FC<Props> = ({title, description, image, keywords, icon}) => {
    const formatTile = `${title} • ${process.env.NEXT_PUBLIC_SITE_NAME}`

    return (
        <Head>
            <title>{formatTile}</title>
            <meta name="description" content={description?.slice(0, 150)}/>
            <meta name="keywords" content={keywords}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="shortcut icon" href={icon}/>

            <meta name="og:title" content={formatTile}/>
            <meta name="og:type" content="website"/>
            <meta name="og:image" content={image}/>
            <meta name="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME}/>
            <meta name="og:description" content={description?.slice(0, 150)}/>
        </Head>
    )
}

Seo.defaultProps = {
    icon: process.env.NEXT_PUBLIC_ICON,
    description:
        'Created by Misrudin • For Complete Assessment Test Submission MyTEnS',
    title: 'Assessment Test Submission MyTEnS',
    keywords: 'github,repository',
    image: ""
}

export default Seo
