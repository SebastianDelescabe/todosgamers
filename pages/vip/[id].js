import React, { useEffect, useState } from "react";
import BreweryData from "../../components/vip/BreweryData";
import BreweryReviews from "../../components/vip/BreweryReviews";
import { useRouter } from "next/router";
import { breweriesByID } from "../../helpers/breweriesByID";
import { reviews } from "../../assets/images/reviews";

export default function Vip() {

  const router = useRouter();
  const { id } = router.query;

  const [breweryInfo, setbreweryData] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!breweryInfo) {
      breweriesByID(id).then((response) => {
        setbreweryData(response[0]);
        setLoading(false)
      });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="loader">
        <div class="lds-dual-ring"></div>
      </div>
    )
  } else {
    return (
      <section id="vip">
        <div className="vip__info-container">
          {breweryInfo && (
            <>
              <h1 className="app__title">{breweryInfo.breweryName}</h1>
              <BreweryData
                breweryAdress={breweryInfo.breweryAdress}
                breweryPhone={breweryInfo.breweryPhone}
              />
            </>
          )}
        </div>
        <div className="vip__reviews-container">
          <h1 className="app__title">Opiniones</h1>
          {
            reviews && reviews.map(review => (
              <BreweryReviews key={`${review.id} + ${review.name}`} data={review}/>
            ))
          }
        </div>
      </section>
    )
  }
}
