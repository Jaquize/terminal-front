import '../src/assets/scss/index.scss';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from '../src/layouts/Header';
import Sidebar from '../src/layouts/Sidebar';
import PageContainer from '../src/layouts/PageContainer';


const client = new ApolloClient({
  uri: 'http://192.168.0.4:8080/graphql',
  cache: new InMemoryCache(),

})

function MyApp({ Component, pageProps }) {

  return (
    <ApolloProvider client={client}>
      <Header/>
       <div className='main-container'> 
        {!Component.NoSidebar && <Sidebar/>}
      <Component {...pageProps} />     
      </div>
    </ApolloProvider>

  )
}


export default MyApp