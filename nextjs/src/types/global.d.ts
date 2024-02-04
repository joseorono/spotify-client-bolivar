
type SpotifySearchTypes = 'artist' | 'album' | 'track';

interface INextUISelectOption {
    label: string;
    value: SpotifySearchTypes;
}

interface SearchTypeOptions extends INextUISelectOption {}


