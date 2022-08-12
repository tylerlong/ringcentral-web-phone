import { ClientContext, InviteClientContext, InviteServerContext, ReferClientContext } from 'sip.js';
import { WebPhoneUserAgent } from './userAgent';
import { MediaStreams } from './mediaStreams';
export interface RCHeaders {
    sid?: string;
    request?: string;
    from?: string;
    to?: string;
    srvLvl?: string;
    srvLvlExt?: string;
    nm?: string;
    toNm?: string;
    callAttributes?: string;
    srcIVRSiteName?: string;
    queueName?: string;
    queueExtPin?: string;
    inDID?: string;
    inDIDLabel?: string;
    callerId?: string;
    callerIdName?: string;
    displayInfo?: string;
    displayInfoSub?: string;
}
export interface RTCPeerConnectionLegacy extends RTCPeerConnection {
    getRemoteStreams: () => MediaStream[];
    getLocalStreams: () => MediaStream[];
}
export declare type WebPhoneSession = InviteClientContext & InviteServerContext & {
    __sendRequest: typeof InviteServerContext.prototype.sendRequest;
    __receiveRequest: typeof InviteServerContext.prototype.receiveRequest;
    __accept: typeof InviteServerContext.prototype.accept;
    __hold: typeof InviteClientContext.prototype.hold;
    __unhold: typeof InviteClientContext.prototype.unhold;
    __dtmf: typeof InviteClientContext.prototype.dtmf;
    __reinvite: typeof InviteClientContext.prototype.reinvite;
    sendRequest: typeof sendRequest;
    receiveRequest: typeof receiveRequest;
    accept: typeof accept;
    hold: typeof hold;
    unhold: typeof unhold;
    dtmf: typeof dtmf;
    reinvite: typeof reinvite;
    _sendReceiveConfirmPromise: Promise<any>;
    ua: WebPhoneUserAgent;
    local_hold: boolean;
    failed: any;
    sessionDescriptionHandler: {
        peerConnection: RTCPeerConnectionLegacy;
        getDirection: any;
    };
    __patched: boolean;
    __onRecord: boolean;
    hasAnswer: boolean;
    media: any;
    rcHeaders: RCHeaders;
    warmTransfer: typeof warmTransfer;
    blindTransfer: typeof blindTransfer;
    transfer: typeof transfer;
    park: typeof park;
    forward: typeof forward;
    startRecord: typeof startRecord;
    stopRecord: typeof stopRecord;
    flip: typeof flip;
    whisper: typeof whisper;
    barge: typeof barge;
    mute: typeof mute;
    unmute: typeof unmute;
    onLocalHold: typeof onLocalHold;
    addTrack: typeof addTrack;
    canUseRCMCallControl: typeof canUseRCMCallControl;
    createSessionMessage: typeof createSessionMessage;
    sendSessionMessage: typeof sendSessionMessage;
    sendReceiveConfirm: typeof sendReceiveConfirm;
    ignore: typeof ignore;
    toVoicemail: typeof toVoicemail;
    replyWithMessage: typeof replyWithMessage;
    logger: any;
    on(event: 'muted' | 'unmuted', listener: (session: WebPhoneSession) => void): WebPhoneSession;
    mediaStreams: MediaStreams;
    mediaStatsStarted: boolean;
    noAudioReportCount: number;
    reinviteForNoAudioSent: boolean;
    stopMediaStats: typeof stopMediaStats;
    receiveReinviteResponse: any;
    pendingReinvite: boolean;
    sendReinvite: Promise<any>;
    _sendReinvite: typeof sendReinvite;
    getIncomingInfoContent: typeof getIncomingInfoContent;
    sendMoveResponse: typeof sendMoveResponse;
    sendReceive: typeof sendReceive;
};
export declare const patchSession: (session: WebPhoneSession) => WebPhoneSession;
export declare const patchIncomingSession: (session: WebPhoneSession) => void;
declare function canUseRCMCallControl(this: WebPhoneSession): boolean;
declare function createSessionMessage(this: WebPhoneSession, options: RCHeaders): string;
declare function ignore(this: WebPhoneSession): Promise<ClientContext>;
declare function sendSessionMessage(this: WebPhoneSession, options: any): Promise<ClientContext>;
declare function sendReceiveConfirm(this: WebPhoneSession): Promise<ClientContext>;
declare function toVoicemail(this: WebPhoneSession): Promise<ClientContext>;
interface ReplyOptions {
    replyType: number;
    replyText: string;
    timeValue: string;
    timeUnits: string;
    callbackDirection: string;
}
declare function replyWithMessage(this: WebPhoneSession, replyOptions: ReplyOptions): Promise<ClientContext>;
declare function sendReceive(session: WebPhoneSession, command: any, options?: any): Promise<any>;
declare function sendRequest(this: WebPhoneSession, type: any, config: any): InviteServerContext;
declare function getIncomingInfoContent(this: WebPhoneSession, request: any): any;
declare function sendMoveResponse(this: WebPhoneSession, reqId: number, code: number, description: string, options?: any): void;
declare function receiveRequest(this: WebPhoneSession, request: any): any;
declare function accept(this: WebPhoneSession, options?: any): Promise<WebPhoneSession>;
declare function dtmf(this: WebPhoneSession, dtmf: string, duration?: number, interToneGap?: number): void;
declare function sendReinvite(this: WebPhoneSession, options?: any): Promise<any>;
declare function hold(this: WebPhoneSession): Promise<any>;
declare function unhold(this: WebPhoneSession): Promise<any>;
declare function blindTransfer(this: WebPhoneSession, target: any, options?: {}): Promise<ReferClientContext>;
declare function warmTransfer(this: WebPhoneSession, target: WebPhoneSession, transferOptions?: any): Promise<ReferClientContext>;
declare function transfer(this: WebPhoneSession, target: WebPhoneSession, options?: any): Promise<ReferClientContext>;
declare function forward(this: WebPhoneSession, target: WebPhoneSession, acceptOptions: any, transferOptions: any): Promise<ReferClientContext>;
declare function startRecord(this: WebPhoneSession): Promise<any>;
declare function stopRecord(this: WebPhoneSession): Promise<any>;
declare function flip(this: WebPhoneSession, target: any): Promise<any>;
declare function whisper(this: WebPhoneSession): Promise<any>;
declare function barge(this: WebPhoneSession): Promise<any>;
declare function park(this: WebPhoneSession): Promise<any>;
declare function reinvite(this: WebPhoneSession, options?: any, modifier?: any): void;
declare function mute(this: WebPhoneSession, silent?: boolean): void;
declare function unmute(this: WebPhoneSession, silent?: boolean): void;
declare function onLocalHold(this: WebPhoneSession): boolean;
declare function addTrack(this: WebPhoneSession, remoteAudioEle: any, localAudioEle: any): void;
declare function stopMediaStats(this: WebPhoneSession): void;
export {};
