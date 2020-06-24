import Layout from "../../../components/Layout";
import { LinkIcon } from "../../../constant/iconsvg";
import { useEffect, useState } from "react";
import IlanComponent from "../../../components/IlanComponent";
import { getBasvuruWWhere } from "../../../lib/basvuru";
export default function IlanPage({ id, slug }) {
  const [ilanData, setIlanData] = useState(null);
  useEffect(() => {
    getBasvuruWWhere(parseInt(id)).then((responseJson) =>
      responseJson.forEach((docs) =>
        setIlanData(docs.data()),
      ),
    );
  }, []);

  return (
    <Layout>
      {ilanData ? (
        <IlanComponent {...ilanData} />
      ) : (
        <div class="loader_width">
          <div class="item item-1"></div>
          <div class="item item-2"></div>
          <div class="item item-3"></div>
          <div class="item item-4"></div>
        </div>
      )}
    </Layout>
  );
}

IlanPage.getInitialProps = ({ query }) => {
  return { id: query.id, slug: query.slug };
};
