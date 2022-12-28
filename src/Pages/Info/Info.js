import React from 'react';
import { Carousel } from 'react-carousel-minimal';


const Info = () => {
    const data = [
        {
            image: "https://www.sriramakrishnahospital.com/wp-content/uploads/2021/06/Blood-Donation-1.jpg",
            // caption: " San Francisco"
        },
        {
            image: "https://www.thephuketnews.com/photo/listing/2016/1463739923_1-org.jpg",
            // caption: "Scotland"
        },
        {
            image: "https://stanfordbloodcenter.org/wp-content/uploads/2020/06/Blood-facts_10-illustration-graphics__canteen.png",
            // caption: "Darjeeling"
        },
        {
            image: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/05/GettyImages-1129729012_header-1024x575.jpg?w=1155&h=1528",
            // caption: "San Francisco"
        },
        {
            image: "https://www.shutterstock.com/image-vector/blood-donation-vector-illustration-creative-260nw-1072582448.jpg",
            // caption: "Scotland"
        },
        {
            image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/182FF/production/_107317099_blooddonor976.jpg",
            // caption: "Darjeeling"
        },
        {
            image: "https://previews.123rf.com/images/giantsweet/giantsweet2003/giantsweet200300003/141967830-blood-donation-design-creative-donor-poster-blood-donor-banner-red-drop-donation-volunteer-blood-don.jpg",
            // caption: "San Francisco"
        },
        {
            image: "https://blog.bonsecours.com/wp-content/uploads/2022/01/Blood-Donation-Myths_1200x628.jpg",
            // caption: "Scotland"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7plTQOeNlFH01J1xhUr-dfqPiCfKaiDpV_LBaMPApPs44SgofaUQOirFInssxuzEDYXo&usqp=CAU",
            // caption: "Darjeeling"
        }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div >
                    <Carousel
                        data={data}
                        time={2000}
                        width="950px"
                        height="400px"
                        captionStyle={captionStyle}
                        radius="20px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "950px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>

                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Info;