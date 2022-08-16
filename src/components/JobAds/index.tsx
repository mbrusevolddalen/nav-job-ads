import { Accordion } from "@navikt/ds-react";
import { FC } from "react";
import { Stilling } from "../../interfaces/JobAds";

interface JobAdsProps {
    jobAds: Array<Stilling>;
}

const JobAds: FC<JobAdsProps> = ({ jobAds }) =>
    <div>
        <Accordion>
            {jobAds.map((jobAd) =>
                <Accordion.Item key={jobAd.uuid}>
                    <Accordion.Header>
                        {jobAd.title}
                    </Accordion.Header>
                    <Accordion.Content>
                        {jobAd.description &&
                            <div dangerouslySetInnerHTML={{ __html: jobAd.description }} />
                        }
                    </Accordion.Content>
                </Accordion.Item>
            )}
        </Accordion>
    </div>

export default JobAds;