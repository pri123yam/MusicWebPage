import * as Selectors from './DisplaySongSelector';
import {
  TestStore
} from './TestStore';

describe('test the working of DisplaySongSelector', () => {

  let initState;
  let selectedSongs;
  beforeEach(() => {
    initState = JSON.parse(JSON.stringify(TestStore));
  });
  describe('the working of selectors individually', () => {
    describe('the working of song selector by keyword', () => {
      it('should run correctly with searchkey: ka', () => {
        initState.data.searchKeyword = 'ka';
        selectedSongs = [{
          artist: "ammy virk",
          duration: "4:09",
          genre: "romance",
          id: 6,
          name: "kaun hoyega",
          thumbnail: "http://www.lyricswithmusic.com/wp-content/uploads/2018/08/KAUN-HOYEGA-Lyrics-640x400.jpg"
        }];
        expect(Selectors.SelectSongsByKeyword(initState)).toEqual(selectedSongs);
      });

      it('should handle with search key=" " correctly', () => {
        initState.data.searchKeyword = '  ';
        selectedSongs = []; //finally expected empty array

        expect(Selectors.SelectSongsByKeyword(initState)).toEqual(selectedSongs);
      });

      it('should run correctly with alhanumeric search key="$%!@#" correctly', () => {
        initState.data.searchKeyword = '$%!@#';
        selectedSongs = []; //finally expected empty array
        expect(Selectors.SelectSongsByKeyword(initState)).toEqual(selectedSongs);
      });


    })

    describe('test the working of song selector by genre', () => {
      it('should run correctly when no genre is slected', () => {
        initState.data.filterArrays.genre = []; //no genre is selected
        selectedSongs = initState.data.songs; //finally selected songs is same as initial initState
        expect(Selectors.SelectSongsByGenre(initState)).toEqual(selectedSongs);
      })

      it('should select songs correctly when two random genres are selected', () => {
        initState.data.filterArrays.genre = ['pop', 'romance'];
        selectedSongs = [{
            artist: "one direction",
            duration: "3:18",
            genre: "pop",
            id: 2,
            name: "what makes you beautiful",
            thumbnail: "https://i.ytimg.com/vi/QJO3ROT-A4E/maxresdefault.jpg"
          },
          {
            id: 6,
            name: "kaun hoyega",
            genre: "romance",
            artist: "ammy virk",
            duration: "4:09",
            thumbnail: "http://www.lyricswithmusic.com/wp-content/uploads/2018/08/KAUN-HOYEGA-Lyrics-640x400.jpg"
          }
        ];
        expect(Selectors.SelectSongsByGenre(initState)).toEqual(selectedSongs);
      })

    })

    describe('test the working of song selector by artists', () => {
      it('should run correctly when no artist is slected', () => {
        initState.data.filterArrays.artist = []; //no artist is selected
        selectedSongs = initState.data.songs; //finally selected songs is same as initial initState
        expect(Selectors.SelectSongsByArtist(initState)).toEqual(selectedSongs);
      })

      it('should select songs correctly when a artists is selected', () => {
        initState.data.filterArrays.artist = ['one direction'];
        selectedSongs = [{
          id: 2,
          genre: "pop",
          name: "what makes you beautiful",
          artist: "one direction",
          duration: "3:18",
          thumbnail: "https://i.ytimg.com/vi/QJO3ROT-A4E/maxresdefault.jpg"
        }]

        expect(Selectors.SelectSongsByArtist(initState)).toEqual(selectedSongs);
      })
    })
  })

  describe('tests the working of selectors as a whole', () => {
    it('tests a particular hybrid case', () => {
      initState.data.searchKeyword = 'ta'; //setting search keyword as 'le'
      initState.data.filterArrays.artist = ['dave brubeck']; //setting artist as 'adele'
      initState.data.filterArrays.genre = ['jazz']; //setting genre to 'pop', 'jazz'
      selectedSongs = [{
        id: 11,
        name: "take five",
        genre: "jazz",
        artist: "dave brubeck",
        duration: "5:28",
        thumbnail: "https://i.ytimg.com/vi/vmDDOFXSgAs/hqdefault.jpg"
      }]
      expect(Selectors.SelectSongsByArtist(initState)).toEqual(selectedSongs);
    })
  })
  afterEach(() => {
    initState = undefined;
    selectedSongs = undefined;
  });
})