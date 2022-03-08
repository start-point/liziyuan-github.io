export interface IStore {
  colorStore: NameSpaceStore.IColorModel;
}

export namespace NameSpaceStore {
  export interface IColorModel {
    mode: string;
    changeMode: (m: any) => void;
  }
}
