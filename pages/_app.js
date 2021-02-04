import "../styles/index.scss";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import App from "next/app";

function MyApp({ Component, pageProps, router }) {
  // <Component/> returns the component it self
  // pageProps returns the props you use to in that component. It can be any data
  // router.route returns the route your component lives on. So in our case it will be '/' or '/products/[id]'
  // exitBeforeEnter: AnimatePresence will only render one component at a time. The exiting component will finished its exit animation before the entering component is rendered
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.div key={router.query.id}>
          <Component {...pageProps} key={router.route} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
