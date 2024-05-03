from typing import Tuple, Set, Iterable, List


class DisplayingOptionsDialogEventArgs(RevitAPIPreEventArgs):
    def AddTab(self, newTabName: str, tabbedDialogExtension: TabbedDialogExtension) -> None: ...
    @property
    def PagesCount(self) -> int: ...


class ApplicationClosingEventArgs(RevitAPIPreEventArgs):


class DialogBoxShowingEventArgs(RevitAPIPreEventArgs):
    @property
    def DialogId(self) -> str: ...
    def OverrideResult(self, resultCode: int) -> bool: ...


class MessageBoxShowingEventArgs(DialogBoxShowingEventArgs):
    @property
    def Message(self) -> str: ...
    @property
    def DialogType(self) -> int: ...


class TaskDialogShowingEventArgs(DialogBoxShowingEventArgs):
    @property
    def Message(self) -> str: ...


class DockableFrameFocusChangedEventArgs(RevitAPISingleEventArgs):
    @property
    def FocusGained(self) -> bool: ...
    @property
    def PaneId(self) -> DockablePaneId: ...


class DockableFrameVisibilityChangedEventArgs(RevitAPISingleEventArgs):
    @property
    def DockableFrameShown(self) -> bool: ...
    @property
    def PaneId(self) -> DockablePaneId: ...


class FabricationPartBrowserChangedEventArgs(RevitAPISingleEventArgs):
    @property
    def Operation(self) -> FabricationPartBrowserOperation: ...
    @property
    def ServiceId(self) -> int: ...
    @property
    def NumberOfSolutions(self) -> int: ...
    def GetFabricationPartTypeIds(self) -> ISet: ...
    def GetRequiredFabricationPartTypeIds(self) -> ISet: ...
    def GetFilteredSolutionsPartsTypeCounts(self) -> IDictionary: ...
    def GetAllSolutionsPartsTypeCounts(self) -> IDictionary: ...
    def GetCurrentSolutionPartTypeIds(self) -> ISet: ...


class FormulaEditingEventArgs(RevitAPIPreEventArgs):
    @property
    def CurrentDocument(self) -> Document: ...
    @property
    def ParameterId(self) -> ElementId: ...
    @property
    def Formula(self) -> str: ...
    def Apply(self, formula: str) -> None: ...


class IdlingEventArgs(RevitAPIPreEventArgs):
    def SetRaiseWithoutDelay(self) -> None: ...


class TransferringProjectStandardsEventArgs(RevitAPIPreDocEventArgs):
    @property
    def SourceDocument(self) -> Document: ...
    @property
    def TargetDocument(self) -> Document: ...
    def GetExternalItems(self) -> IDictionary: ...
    def SetExternalItems(self, externalItems: IDictionary) -> None: ...


class TransferredProjectStandardsEventArgs(RevitAPISingleEventArgs):
    @property
    def SourceDocument(self) -> Document: ...
    @property
    def TargetDocument(self) -> Document: ...
    def GetSelectedExternalItems(self) -> IDictionary: ...


class ViewActivatedEventArgs(RevitAPIPostDocEventArgs):
    @property
    def CurrentActiveView(self) -> View: ...
    @property
    def PreviousActiveView(self) -> View: ...


class ViewActivatingEventArgs(RevitAPIPreDocEventArgs):
    @property
    def NewActiveView(self) -> View: ...
    @property
    def CurrentActiveView(self) -> View: ...


class RibbonItemEventArgs:
    def __init__(self): ...
    @property
    def Application(self) -> UIApplication: ...


class ComboBoxDropDownOpenedEventArgs(RibbonItemEventArgs):
    def __init__(self): ...


class ComboBoxDropDownClosedEventArgs(RibbonItemEventArgs):
    def __init__(self): ...


class ComboBoxCurrentChangedEventArgs(RibbonItemEventArgs):
    @property
    def OldValue(self) -> ComboBoxMember: ...
    @property
    def NewValue(self) -> ComboBoxMember: ...


class TextBoxEnterPressedEventArgs(RibbonItemEventArgs):
    def __init__(self): ...


class CommandEventArgs(RevitEventArgs):
    @property
    def ActiveDocument(self) -> Document: ...
    @property
    def CommandId(self) -> RevitCommandId: ...


class BeforeExecutedEventArgs(CommandEventArgs):
    @property
    def UsingCommandData(self) -> bool: ...
    @UsingCommandData.setter
    def UsingCommandData(self, usingCommandData: bool) -> None: ...


class ExecutedEventArgs(CommandEventArgs):
    def GetJournalData(self) -> IDictionary: ...
    def SetJournalData(self, data: IDictionary) -> None: ...


class CanExecuteEventArgs(CommandEventArgs):
    @property
    def CanExecute(self) -> bool: ...
    @CanExecute.setter
    def CanExecute(self, canExecute: bool) -> None: ...
    def GetSelectedCategoryIds(self) -> ICollection: ...


class FabricationPartBrowserOperation:
    ShowBrowser = 0
    HideBrowser = 1
    ShowService = 2
    StartRoutingSolutionMode = 3
    CreatedRoutingSolutions = 4
    RoutingSolutionChanged = 5
    FinishRoutingSolutionMode = 6
    StartMPRoutingMode = 7
    FinishMPRoutingMode = 8
    StartServiceSwapOutMode = 9
    FinishServiceSwapOutMode = 10
    UpdateServiceSwapOutPartTypes = 11
    UpdateServiceSwapOutSizes = 12
    StartSizeSwapOutMode = 13
    FinishSizeSwapOutMode = 14
    SwitchToInlineFittingsTab = 15
    UnknownOperation = -1


class DialogBoxData(APIObject):
    @property
    def HelpId(self) -> int: ...
    def OverrideResult(self, result: int) -> bool: ...


class MessageBoxData(DialogBoxData):
    @property
    def Message(self) -> str: ...
    @property
    def DialogType(self) -> int: ...
