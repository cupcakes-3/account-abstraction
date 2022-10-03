import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IStakeManager {
    type DepositInfoStruct = {
        deposit: PromiseOrValue<BigNumberish>;
        staked: PromiseOrValue<boolean>;
        stake: PromiseOrValue<BigNumberish>;
        unstakeDelaySec: PromiseOrValue<BigNumberish>;
        withdrawTime: PromiseOrValue<BigNumberish>;
    };
    type DepositInfoStructOutput = [
        BigNumber,
        boolean,
        BigNumber,
        number,
        BigNumber
    ] & {
        deposit: BigNumber;
        staked: boolean;
        stake: BigNumber;
        unstakeDelaySec: number;
        withdrawTime: BigNumber;
    };
}
export interface StakeManagerInterface extends utils.Interface {
    functions: {
        "addStake(uint32)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "depositTo(address)": FunctionFragment;
        "deposits(address)": FunctionFragment;
        "getDepositInfo(address)": FunctionFragment;
        "paymasterStake()": FunctionFragment;
        "unlockStake()": FunctionFragment;
        "unstakeDelaySec()": FunctionFragment;
        "withdrawStake(address)": FunctionFragment;
        "withdrawTo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addStake" | "balanceOf" | "depositTo" | "deposits" | "getDepositInfo" | "paymasterStake" | "unlockStake" | "unstakeDelaySec" | "withdrawStake" | "withdrawTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "addStake", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "depositTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "deposits", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getDepositInfo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "paymasterStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "unlockStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "unstakeDelaySec", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawStake", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawTo", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDepositInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paymasterStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstakeDelaySec", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;
    events: {
        "Deposited(address,uint256)": EventFragment;
        "StakeLocked(address,uint256,uint256)": EventFragment;
        "StakeUnlocked(address,uint256)": EventFragment;
        "StakeWithdrawn(address,address,uint256)": EventFragment;
        "Withdrawn(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeLocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeUnlocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}
export interface DepositedEventObject {
    account: string;
    totalDeposit: BigNumber;
}
export declare type DepositedEvent = TypedEvent<[
    string,
    BigNumber
], DepositedEventObject>;
export declare type DepositedEventFilter = TypedEventFilter<DepositedEvent>;
export interface StakeLockedEventObject {
    account: string;
    totalStaked: BigNumber;
    withdrawTime: BigNumber;
}
export declare type StakeLockedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], StakeLockedEventObject>;
export declare type StakeLockedEventFilter = TypedEventFilter<StakeLockedEvent>;
export interface StakeUnlockedEventObject {
    account: string;
    withdrawTime: BigNumber;
}
export declare type StakeUnlockedEvent = TypedEvent<[
    string,
    BigNumber
], StakeUnlockedEventObject>;
export declare type StakeUnlockedEventFilter = TypedEventFilter<StakeUnlockedEvent>;
export interface StakeWithdrawnEventObject {
    account: string;
    withdrawAddress: string;
    amount: BigNumber;
}
export declare type StakeWithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], StakeWithdrawnEventObject>;
export declare type StakeWithdrawnEventFilter = TypedEventFilter<StakeWithdrawnEvent>;
export interface WithdrawnEventObject {
    account: string;
    withdrawAddress: string;
    amount: BigNumber;
}
export declare type WithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], WithdrawnEventObject>;
export declare type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;
export interface StakeManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StakeManagerInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addStake(_unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        depositTo(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deposits(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean,
            BigNumber,
            number,
            BigNumber
        ] & {
            deposit: BigNumber;
            staked: boolean;
            stake: BigNumber;
            unstakeDelaySec: number;
            withdrawTime: BigNumber;
        }>;
        getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IStakeManager.DepositInfoStructOutput
        ] & {
            info: IStakeManager.DepositInfoStructOutput;
        }>;
        paymasterStake(overrides?: CallOverrides): Promise<[BigNumber]>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unstakeDelaySec(overrides?: CallOverrides): Promise<[number]>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addStake(_unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    depositTo(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deposits(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        boolean,
        BigNumber,
        number,
        BigNumber
    ] & {
        deposit: BigNumber;
        staked: boolean;
        stake: BigNumber;
        unstakeDelaySec: number;
        withdrawTime: BigNumber;
    }>;
    getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IStakeManager.DepositInfoStructOutput>;
    paymasterStake(overrides?: CallOverrides): Promise<BigNumber>;
    unlockStake(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unstakeDelaySec(overrides?: CallOverrides): Promise<number>;
    withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addStake(_unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        depositTo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        deposits(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean,
            BigNumber,
            number,
            BigNumber
        ] & {
            deposit: BigNumber;
            staked: boolean;
            stake: BigNumber;
            unstakeDelaySec: number;
            withdrawTime: BigNumber;
        }>;
        getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IStakeManager.DepositInfoStructOutput>;
        paymasterStake(overrides?: CallOverrides): Promise<BigNumber>;
        unlockStake(overrides?: CallOverrides): Promise<void>;
        unstakeDelaySec(overrides?: CallOverrides): Promise<number>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Deposited(address,uint256)"(account?: PromiseOrValue<string> | null, totalDeposit?: null): DepositedEventFilter;
        Deposited(account?: PromiseOrValue<string> | null, totalDeposit?: null): DepositedEventFilter;
        "StakeLocked(address,uint256,uint256)"(account?: PromiseOrValue<string> | null, totalStaked?: null, withdrawTime?: null): StakeLockedEventFilter;
        StakeLocked(account?: PromiseOrValue<string> | null, totalStaked?: null, withdrawTime?: null): StakeLockedEventFilter;
        "StakeUnlocked(address,uint256)"(account?: PromiseOrValue<string> | null, withdrawTime?: null): StakeUnlockedEventFilter;
        StakeUnlocked(account?: PromiseOrValue<string> | null, withdrawTime?: null): StakeUnlockedEventFilter;
        "StakeWithdrawn(address,address,uint256)"(account?: PromiseOrValue<string> | null, withdrawAddress?: null, amount?: null): StakeWithdrawnEventFilter;
        StakeWithdrawn(account?: PromiseOrValue<string> | null, withdrawAddress?: null, amount?: null): StakeWithdrawnEventFilter;
        "Withdrawn(address,address,uint256)"(account?: PromiseOrValue<string> | null, withdrawAddress?: null, amount?: null): WithdrawnEventFilter;
        Withdrawn(account?: PromiseOrValue<string> | null, withdrawAddress?: null, amount?: null): WithdrawnEventFilter;
    };
    estimateGas: {
        addStake(_unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        depositTo(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deposits(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        paymasterStake(overrides?: CallOverrides): Promise<BigNumber>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unstakeDelaySec(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addStake(_unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        depositTo(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deposits(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paymasterStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unstakeDelaySec(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}