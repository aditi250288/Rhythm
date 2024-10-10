import React, { useContext } from 'react';
import LoggedInContainer from "../containers/LoggedInContainer";
import songContext from "../contexts/songContext"; // Assuming songContext is available

const focusCardsData = [
  {
    title: "London Thumaka",
    description: "Dance with me",
    imgUrl: "https://images.unsplash.com/photo-1517578099694-8b23adec837c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    songId: "6704e8ef694c398f8d5fa6c1"
  },
  {
    title: "Mana ke hum yaar",
    description: "Keep calm and focus with this music",
    imgUrl: "https://images.unsplash.com/photo-1526631134603-8d692d622f78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    songId: "66f534e41492a138488ead3f"
},
{
  title: "Keh du tumhe",
  description: "Pop music",
  imgUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  songId: "6704e8ef694c398f8d5fa6bb"
},
{
  title: "Moh Moh Ke Dhaage (Male)",
  description: "Romatic hits",
  imgUrl: "https://images.unsplash.com/photo-1524578471438-cdd96d68d82c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  songId: "6704e8ef694c398f8d5fa6b7"
},

{
  title: "Balam pichkari",
  description: "Holi fever",
  imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  songId: "6704e8ef694c398f8d5fa6cd"
}
];

// eslint-disable-next-line no-unused-vars
const rhythmPlaylistsCardData = [
  {
    title: "Shukran Allah",
    description: "Love is in the air",
    imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    songId: "6704e8ef694c398f8d5fa6b8"
  },

  {
    title: "Zindagi Zindagi",
    description: "Marathi Beats",
    imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    songId:"6704e8ef694c398f8d5fa6b4"
},
{
  title: "Hoga tumse pyara kaun",
  description: "old songs",
  imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  songId: "6704e8ef694c398f8d5fa6ca"
},
{
  title: "Kamli",
  description: "Music to dance",
  imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  songId: "6704e8ef694c398f8d5fa6d0"
},

{
  title: "Classic",
  description: "old musical melodies",
  imgUrl: "https://plus.unsplash.com/premium_photo-1682125816787-4db071ef2da8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
];

// eslint-disable-next-line no-unused-vars
const SoundOfIndiaCardsData = [
  {
    title: "Soul of India",
    description: "Songs which touches your heart",
    imgUrl: "https://images.unsplash.com/photo-1633411988188-6e63354a9019?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Bollywood Bash",
    description: "Slow songs with great music",
    imgUrl: "https://images.unsplash.com/photo-1461784229652-c9271a46d4c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},

{
  title: "My Marathi",
  description: "Enjoy regional language",
  imgUrl: "https://images.unsplash.com/photo-1483032469466-b937c425697b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},

{
  title: "Old Melodies",
  description: "Rock music",
  imgUrl: "https://images.unsplash.com/photo-1510511450816-30c68106b199?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},

{
  title: "90's Classic hits",
  description: "old musical melodies",
  imgUrl: "https://plus.unsplash.com/premium_photo-1682125893394-7372df580472?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
];

const LoggedInHome = () => {
  const { currentSong, setCurrentSong } = useContext(songContext); 

  // Function to retrieve the JWT token from the cookie
  const getTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find(cookie => cookie.startsWith("token="));
  if (tokenCookie) {
    return tokenCookie.split("=")[1];
    }
    return null;
  };

  // Function to handle card click and play the song
  const handleCardClick = async (songId) => {
    try {
      // Avoid fetching the song and setting it again if it's already the current song
      if (currentSong && currentSong._id === songId) {
        console.log("This song is already playing");
        return;
      }
  
      const token = getTokenFromCookie();
      if (!token) {
        console.error("No JWT token found in cookies, user may not be authenticated");
        return;
      }
  
      // Fetch the song data from the backend
      const response = await fetch(`http://localhost:5000/api/song/get/${songId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        setCurrentSong(data.data); // Set the current song using songContext
      } else {
        console.error("Failed to fetch song:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching song:", error);
    }
  };
  
  return (
    <LoggedInContainer curActiveScreen="home">
      <div className="content p-8 text-white">
        <div className="text-2xl font-bold mb-4">Recently played</div>
        <div className="grid grid-cols-5 gap-4">
          {focusCardsData.map((card, index) => (
            <div
              key={index}
              className="bg-black p-4 rounded-lg cursor-pointer"
              onClick={() => handleCardClick(card.songId)}
            >
              <img src={card.imgUrl} alt={card.title} className="w-full h-40 object-cover rounded-lg mb-2" />
              <div className="text-white font-semibold">{card.title}</div>
              <div className="text-gray-400 text-sm">{card.description}</div>
            </div>
          ))}
        </div>
        
        <div className="text-2xl font-bold mb-4 mt-8">Rhythm Playlists</div>
        <div className="grid grid-cols-5 gap-4">
          {rhythmPlaylistsCardData.map((card, index) => (
            <div
              key={index}
              className="bg-black p-4 rounded-lg cursor-pointer"
              onClick={() => handleCardClick(card.songId)}
            >
              <img src={card.imgUrl} alt={card.title} className="w-full h-40 object-cover rounded-lg mb-2" />
              <div className="text-white font-semibold">{card.title}</div>
              <div className="text-gray-400 text-sm">{card.description}</div>
            </div>
          ))}
        </div>

        <div className="text-2xl font-bold mb-4 mt-8">Sound of India</div>
        <div className="grid grid-cols-5 gap-4">
          {SoundOfIndiaCardsData.map((card, index) => (
            <div
              key={index}
              className="bg-black p-4 rounded-lg cursor-pointer"
              onClick={() => handleCardClick(card.songId)}
            >
              <img src={card.imgUrl} alt={card.title} className="w-full h-40 object-cover rounded-lg mb-2" />
              <div className="text-white font-semibold">{card.title}</div>
              <div className="text-gray-400 text-sm">{card.description}</div>
            </div>
          ))}
        </div>
      </div>
    </LoggedInContainer>
  );
};

export default LoggedInHome;