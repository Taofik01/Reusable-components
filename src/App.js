import './App.css';
import StarRating from './components/Star-rating';
import Accordian from './components/accordions';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCode from 'react-qr-code';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs-components';
import ModalTest from './components/custom-modal-popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
     {/* <Accordian /> */}

     {/* Random Color COmponent  */}
     {/* <RandomColor /> */}

     {/* <StarRating noOfStars={10}  /> */}
     {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={"10"} /> */}
     {/* Load More Data Components */}
     {/* <LoadMoreData /> */}
     {/* Tree View Component */}
     {/* <TreeView menus={menus}/> */}

     {/* QR Code Generator WIth external Library */}
     {/* <QRCode /> */}

     {/* Light And Dark Theme Switch */}
     {/* <LightDarkMode /> */}



     {/* Scroll Indicator Component */}
     {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}


     {/* Custom Tabs Component */}
     {/* <TabTest /> */}


     {/* Custom Modal Popup */}
     {/* <ModalTest /> */}



    {/* Github Profile Finder */}
    <GithubProfileFinder />

    </div>
  );
}

export default App;
