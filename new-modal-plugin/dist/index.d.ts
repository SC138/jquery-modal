declare module 'react-new-modal-plugin' {
    import { ComponentType, Context, ProviderExoticComponent } from 'react';
  
    const Modal: ComponentType<any>;
    const ModalProvider: ProviderExoticComponent<any>;
    const ModalContext: Context<any>;
  
    export { Modal, ModalProvider, ModalContext };
  }
  