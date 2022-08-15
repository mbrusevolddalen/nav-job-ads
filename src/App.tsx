import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import { useEffect, useState } from 'react';
import { Stilling } from './interfaces/JobAds';
import JobAds from './components/JobAds';
import { Header } from "@navikt/ds-react-internal";
import { Loader } from "@navikt/ds-react";

const arbeidsplassenURL = "/public-feed/api/v1/ads?page=50&size=100";

const App = () => {

  const [jobAds, setJobAds] = useState<Array<Stilling>>();

  useEffect(() => {
    fetch(arbeidsplassenURL, {
      headers: {
        'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWJsaWMudG9rZW4udjFAbmF2Lm5vIiwiYXVkIjoiZmVlZC1hcGktdjEiLCJpc3MiOiJuYXYubm8iLCJpYXQiOjE1NTc0NzM0MjJ9.jNGlLUF9HxoHo5JrQNMkweLj_91bgk97ZebLdfx3_UQ',
        'accept': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((res) => setJobAds(res.content))
  }, [])


  if (!jobAds) return (
    <div className="spinner-wrapper">
      <Loader
        variant="neutral"
        size="3xlarge"
        title="Laster..."
      />
    </div>
  )

  return (
    <div className="App">
      <Header>
        <Header.Title as="h1">Ledige stillinger</Header.Title>
      </Header>
      <JobAds jobAds={jobAds} />
    </div>
  );
}

export default App;
