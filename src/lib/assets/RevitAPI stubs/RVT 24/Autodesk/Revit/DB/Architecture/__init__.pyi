from typing import Tuple, Set, Iterable, List


class Room(SpatialElement):
    @property
    def ClosedShell(self) -> GeometryElement: ...
    @property
    def UpperLimit(self) -> Level: ...
    @UpperLimit.setter
    def UpperLimit(self, plev: Level) -> None: ...
    @property
    def LimitOffset(self) -> float: ...
    @LimitOffset.setter
    def LimitOffset(self, vLimitOffset: float) -> None: ...
    @property
    def BaseOffset(self) -> float: ...
    @BaseOffset.setter
    def BaseOffset(self, vBaseOffset: float) -> None: ...
    @property
    def UnboundedHeight(self) -> float: ...
    @property
    def Volume(self) -> float: ...
    def Unplace(self) -> None: ...
    def IsPointInRoom(self, point: XYZ) -> bool: ...


class RoomTagType(FamilySymbol):


class FasciaType(HostedSweepType):


class GutterType(HostedSweepType):


class Fascia(HostedSweep):
    @property
    def FasciaType(self) -> FasciaType: ...
    @FasciaType.setter
    def FasciaType(self, value: FasciaType) -> None: ...
    def AddSegment(self, targetRef: Reference) -> None: ...


class Gutter(HostedSweep):
    @property
    def GutterType(self) -> GutterType: ...
    @GutterType.setter
    def GutterType(self, value: GutterType) -> None: ...
    def AddSegment(self, targetRef: Reference) -> None: ...


class RoomTag(SpatialElementTag):
    @property
    def Room(self) -> Room: ...
    @property
    def RoomTagType(self) -> RoomTagType: ...
    @RoomTagType.setter
    def RoomTagType(self, A_0: RoomTagType) -> None: ...
    @property
    def IsInRoom(self) -> bool: ...
    @property
    def TaggedLocalRoomId(self) -> ElementId: ...
    @property
    def TaggedRoomId(self) -> LinkElementId: ...


class TopographySurface(Element):
    @property
    def ArePointsEditable(self) -> bool: ...
    @property
    def IsSiteSubRegion(self) -> bool: ...
    @property
    def IsAssociatedWithBuildingPad(self) -> bool: ...
    @property
    def AssociatedBuildingPadId(self) -> ElementId: ...
    @property
    def MaterialId(self) -> ElementId: ...
    @MaterialId.setter
    def MaterialId(self, materialId: ElementId) -> None: ...
    @overload
    def Create(document: Document, points: List[XYZ], facets: List[PolymeshFacet]) -> TopographySurface: ...
    @overload
    def Create(document: Document, points: List[XYZ]) -> TopographySurface: ...
    def AddPoints(self, points: List[XYZ]) -> None: ...
    def DeletePoints(self, points: List[XYZ]) -> None: ...
    def MovePoint(self, movedPoint: XYZ, targetPoint: XYZ) -> None: ...
    def MovePoints(self, movedPoints: List[XYZ], moveVector: XYZ) -> None: ...
    def ChangePointElevation(self, point: XYZ, elevationValue: float) -> None: ...
    def ChangePointsElevation(self, points: List[XYZ], elevationValue: float) -> None: ...
    def IsValidRegion(points: List[XYZ]) -> bool: ...
    def ArePointsDistinct(points: List[XYZ]) -> bool: ...
    def GetPoints(self) -> List[XYZ]: ...
    def IsBoundaryPoint(self, point: XYZ) -> bool: ...
    def ContainsPoint(self, point: XYZ) -> bool: ...
    def GetBoundaryPoints(self) -> List[XYZ]: ...
    def GetInteriorPoints(self) -> List[XYZ]: ...
    def FindPoints(self, boundingBox: Outline) -> List[XYZ]: ...
    def AsSiteSubRegion(self) -> SiteSubRegion: ...
    def GetHostedSubRegionIds(self) -> List[ElementId]: ...
    def IsValidFaceSet(facets: List[PolymeshFacet], points: List[XYZ]) -> bool: ...


class BalusterInfo:
    @property
    def BalusterFamilyId(self) -> ElementId: ...
    @BalusterFamilyId.setter
    def BalusterFamilyId(self, balusterFamilyId: ElementId) -> None: ...
    @property
    def Name(self) -> str: ...
    @Name.setter
    def Name(self, name: str) -> None: ...
    @property
    def BaseOffset(self) -> float: ...
    @BaseOffset.setter
    def BaseOffset(self, baseOffset: float) -> None: ...
    @property
    def TopOffset(self) -> float: ...
    @TopOffset.setter
    def TopOffset(self, topOffset: float) -> None: ...
    @property
    def Offset(self) -> float: ...
    @Offset.setter
    def Offset(self, offset: float) -> None: ...
    @property
    def DistanceFromPreviousOrSpace(self) -> float: ...
    @DistanceFromPreviousOrSpace.setter
    def DistanceFromPreviousOrSpace(self, distanceFromPreviousOrSpace: float) -> None: ...
    @property
    def BaseReferenceName(self) -> str: ...
    @BaseReferenceName.setter
    def BaseReferenceName(self, name: str) -> None: ...
    @property
    def TopReferenceName(self) -> str: ...
    @TopReferenceName.setter
    def TopReferenceName(self, name: str) -> None: ...
    @property
    def IsValidObject(self) -> bool: ...
    def GetReferenceNameForHost() -> str: ...
    def GetReferenceNameForTopRail() -> str: ...
    def Dispose(self) -> None: ...


class BalusterPattern:
    @property
    def EndSpace(self) -> float: ...
    @EndSpace.setter
    def EndSpace(self, endSpace: float) -> None: ...
    @property
    def PatternAngle(self) -> float: ...
    @PatternAngle.setter
    def PatternAngle(self, patternAngle: float) -> None: ...
    @property
    def ExcessLengthFillBalusterId(self) -> ElementId: ...
    @ExcessLengthFillBalusterId.setter
    def ExcessLengthFillBalusterId(self, excessLengthFillBalusterId: ElementId) -> None: ...
    @property
    def ExcessLengthFillSpacing(self) -> float: ...
    @ExcessLengthFillSpacing.setter
    def ExcessLengthFillSpacing(self, excessLengthFillSpacing: float) -> None: ...
    @property
    def BreakPattern(self) -> BreakPatternCondition: ...
    @BreakPattern.setter
    def BreakPattern(self, breakPattern: BreakPatternCondition) -> None: ...
    @property
    def DistributionJustification(self) -> PatternJustification: ...
    @DistributionJustification.setter
    def DistributionJustification(self, distributionJustification: PatternJustification) -> None: ...
    @property
    def Length(self) -> float: ...
    @property
    def IsValidObject(self) -> bool: ...
    def GetBalusterCount(self) -> int: ...
    def GetBaluster(self, index: int) -> BalusterInfo: ...
    def DuplicateBaluster(self, index: int) -> BalusterInfo: ...
    def RemoveBaluster(self, index: int) -> None: ...
    def Dispose(self) -> None: ...


class BalusterPlacement:
    @property
    def BalusterPattern(self) -> BalusterPattern: ...
    @property
    def PostPattern(self) -> PostPattern: ...
    @property
    def UseBalusterPerTreadOnStairs(self) -> bool: ...
    @UseBalusterPerTreadOnStairs.setter
    def UseBalusterPerTreadOnStairs(self, useBalusterPerTreadOnStairs: bool) -> None: ...
    @property
    def BalusterPerTreadNumber(self) -> int: ...
    @BalusterPerTreadNumber.setter
    def BalusterPerTreadNumber(self, balusterPerTreadNumber: int) -> None: ...
    @property
    def BalusterPerTreadFamilyId(self) -> ElementId: ...
    @BalusterPerTreadFamilyId.setter
    def BalusterPerTreadFamilyId(self, balusterPerTreadFamilyId: ElementId) -> None: ...
    @property
    def IsValidObject(self) -> bool: ...
    def Dispose(self) -> None: ...


class PostPattern:
    @property
    def StartPost(self) -> BalusterInfo: ...
    @property
    def EndPost(self) -> BalusterInfo: ...
    @property
    def CornerPost(self) -> BalusterInfo: ...
    @property
    def CornerPostAngle(self) -> float: ...
    @CornerPostAngle.setter
    def CornerPostAngle(self, cornerPostAngle: float) -> None: ...
    @property
    def CornerPostCondition(self) -> BreakCornerCondition: ...
    @CornerPostCondition.setter
    def CornerPostCondition(self, cornerPostCondition: BreakCornerCondition) -> None: ...
    @property
    def IsValidObject(self) -> bool: ...
    def Dispose(self) -> None: ...


class BuildingPad(CeilingAndFloor):
    @property
    def HostId(self) -> ElementId: ...
    @property
    def AssociatedTopographySurfaceId(self) -> ElementId: ...
    def Create(document: Document, buildingPadTypeId: ElementId, levelId: ElementId, curveLoops: List[CurveLoop]) -> BuildingPad: ...
    def GetBoundary(self) -> List[CurveLoop]: ...
    def SetBoundary(self, curveLoops: List[CurveLoop]) -> None: ...


class BreakPatternCondition:
    EachSegmentEnd = 0
    AnglesGreaterThan = 1
    Never = 2


class PatternJustification:
    Beginning = 0
    End = 1
    Center = 2
    SpreadPatternToFit = 3


class BreakCornerCondition:
    EachSegmentEnd = 0
    AnglesGreaterThan = 1
    Never = 2


class ContinuousRail(Element):
    @property
    def Length(self) -> float: ...
    @property
    def HostRailingId(self) -> ElementId: ...
    def GetPath(self) -> List[Curve]: ...
    def GetStartExtensionPath(self) -> List[Curve]: ...
    def GetEndExtensionPath(self) -> List[Curve]: ...
    def GetSupports(self) -> List[ElementId]: ...


class ContinuousRailType(ElementType):
    @property
    def StartOrBottomExtensionLength(self) -> float: ...
    @StartOrBottomExtensionLength.setter
    def StartOrBottomExtensionLength(self, StartOrBottomExtensionLength: float) -> None: ...
    @property
    def EndOrTopExtensionLength(self) -> float: ...
    @EndOrTopExtensionLength.setter
    def EndOrTopExtensionLength(self, EndOrTopExtensionLength: float) -> None: ...
    @property
    def ProfileId(self) -> ElementId: ...
    @ProfileId.setter
    def ProfileId(self, profileId: ElementId) -> None: ...
    @property
    def StartOrBottomExtensionStyle(self) -> RailExtensionStyle: ...
    @StartOrBottomExtensionStyle.setter
    def StartOrBottomExtensionStyle(self, StartOrBottomExtensionStyle: RailExtensionStyle) -> None: ...
    @property
    def EndOrTopExtensionStyle(self) -> RailExtensionStyle: ...
    @EndOrTopExtensionStyle.setter
    def EndOrTopExtensionStyle(self, EndOrTopExtensionStyle: RailExtensionStyle) -> None: ...
    @property
    def Transition(self) -> RailTransitionOption: ...
    @Transition.setter
    def Transition(self, Transition: RailTransitionOption) -> None: ...
    @property
    def DefaultJoinOption(self) -> RailTypeDefaultJoinOption: ...
    @DefaultJoinOption.setter
    def DefaultJoinOption(self, DefaultJoinOption: RailTypeDefaultJoinOption) -> None: ...
    @property
    def FilletRadius(self) -> float: ...
    @FilletRadius.setter
    def FilletRadius(self, filletRadius: float) -> None: ...
    @property
    def StartOrBottomTermination(self) -> ElementId: ...
    @StartOrBottomTermination.setter
    def StartOrBottomTermination(self, termination: ElementId) -> None: ...
    @property
    def EndOrTopTermination(self) -> ElementId: ...
    @EndOrTopTermination.setter
    def EndOrTopTermination(self, termination: ElementId) -> None: ...
    @property
    def Projection(self) -> float: ...
    @property
    def HandClearance(self) -> float: ...
    @HandClearance.setter
    def HandClearance(self, clearance: float) -> None: ...


class RailExtensionStyle:
    #None = 0
    Wall = 1
    Floor = 2
    Post = 3


class RailJoinOption:
    Miter = 0
    Fillet = 1
    ByType = -1


class RailTypeDefaultJoinOption:
    Miter = 0
    Fillet = 1


class RailConnectionOption:
    Trim = 0
    Weld = 1


class RailSupportsLayout:
    #None = 0
    FixedDistance = 1
    AlignWithRailingPosts = 2
    FixedNumber = 3
    MaxSpacing = 4
    MinSpacing = 5


class RailSupportJustification:
    Begin = 0
    Center = 1
    End = 2


class HandRailPosition:
    #None = 0
    Left = 1
    Right = 2
    LeftAndRight = 3


class RailTransitionOption:
    #None = 0
    Gooseneck = 1
    Simple = 2


class RailingPlacementPosition:
    Treads = 0
    Stringer = 1
    Undefined = -1


class RailingHeightCorrectionOption:
    ByType = 0
    Custom = 1


class RailingSlopeOption:
    ByHost = 0
    Flat = 1
    Sloped = 2


class RailAngledJoinOption:
    AddVerticalOrHorizontalSegments = 0
    NoConnector = 1


class RailTagentJoinOption:
    AddVerticalOrHorizontalSegments = 0
    NoConnector = 1
    ExtendRailsToMeet = 2


class RailingPathCurveJoinOption:
    ByType = 0
    ExtendRailsToMeet = 1
    AddVerticalOrHorizontalSegments = 2
    NoConnector = 3


class RailIndex:
    Top = 0
    LeftPrimary = 1
    RightPrimary = 2
    LeftSecondary = 3
    RightSecondary = 4


class NonContinuousRailInfo:
    @property
    def Name(self) -> str: ...
    @Name.setter
    def Name(self, name: str) -> None: ...
    @property
    def Height(self) -> float: ...
    @Height.setter
    def Height(self, height: float) -> None: ...
    @property
    def Offset(self) -> float: ...
    @Offset.setter
    def Offset(self, offset: float) -> None: ...
    @property
    def ProfileId(self) -> ElementId: ...
    @ProfileId.setter
    def ProfileId(self, profileId: ElementId) -> None: ...
    @property
    def MaterialId(self) -> ElementId: ...
    @MaterialId.setter
    def MaterialId(self, materialId: ElementId) -> None: ...
    @property
    def IsValidObject(self) -> bool: ...
    def IsValidNonContinuousRailHeight(self, height: float) -> bool: ...
    def IsValidNonContinuousRailName(self, name: str) -> bool: ...
    def IsValidNonContinuousRailProfile(self, profileId: ElementId) -> bool: ...
    def IsValidNonContinuousRailMaterial(self, materialId: ElementId) -> bool: ...
    def Dispose(self) -> None: ...


class NonContinuousRailStructure:
    @property
    def IsValidObject(self) -> bool: ...
    def GetNonContinuousRailCount(self) -> int: ...
    def AddNonContinuousRail(self, name: str, height: float, offset: float) -> NonContinuousRailInfo: ...
    def GetNonContinuousRail(self, index: int) -> NonContinuousRailInfo: ...
    def RemoveNonContinuousRail(self, index: int) -> None: ...
    def IsValidNonContinuousRailProfile(self, profileId: ElementId) -> bool: ...
    def Dispose(self) -> None: ...


class RoomFilter(ElementSlowFilter):
    def __init__(self): ...


class RoomTagFilter(ElementSlowFilter):
    def __init__(self): ...


class CutMarkType(ElementType):
    @property
    def CutMarkSymbolSize(self) -> float: ...
    @CutMarkSymbolSize.setter
    def CutMarkSymbolSize(self, CutMarkSymbolSize: float) -> None: ...
    @property
    def CutLineAngle(self) -> float: ...
    @CutLineAngle.setter
    def CutLineAngle(self, CutLineAngle: float) -> None: ...
    @property
    def CutLineExtension(self) -> float: ...
    @CutLineExtension.setter
    def CutLineExtension(self, CutLineExtension: float) -> None: ...
    @property
    def CutLineDistance(self) -> float: ...
    @CutLineDistance.setter
    def CutLineDistance(self, CutLineDistance: float) -> None: ...
    @property
    def CutMarkSymbol(self) -> CutMarkSymbol: ...
    @CutMarkSymbol.setter
    def CutMarkSymbol(self, cutMarkSymbol: CutMarkSymbol) -> None: ...
    @property
    def CutLineType(self) -> CutLineType: ...
    @CutLineType.setter
    def CutLineType(self, cutLineType: CutLineType) -> None: ...


class HandRail(ContinuousRail):


class HandRailType(ContinuousRailType):
    @property
    def Height(self) -> float: ...
    @Height.setter
    def Height(self, height: float) -> None: ...
    @property
    def SupportSpacing(self) -> float: ...
    @SupportSpacing.setter
    def SupportSpacing(self, supportSpacing: float) -> None: ...
    @property
    def SupportTypeId(self) -> ElementId: ...
    @SupportTypeId.setter
    def SupportTypeId(self, supportTypeId: ElementId) -> None: ...
    @property
    def SupportNumber(self) -> int: ...
    @SupportNumber.setter
    def SupportNumber(self, supportNumber: int) -> None: ...
    @property
    def SupportLayout(self) -> RailSupportsLayout: ...
    @SupportLayout.setter
    def SupportLayout(self, supportLayout: RailSupportsLayout) -> None: ...
    @property
    def SupportJustification(self) -> RailSupportJustification: ...
    @SupportJustification.setter
    def SupportJustification(self, supportJustification: RailSupportJustification) -> None: ...


class MultistoryStairs(Element):
    @property
    def ActualTreadDepth(self) -> float: ...
    @ActualTreadDepth.setter
    def ActualTreadDepth(self, actualTreadDepth: float) -> None: ...
    @property
    def StandardStairsId(self) -> ElementId: ...
    def Create(stairs: Stairs) -> MultistoryStairs: ...
    def IsAcceptableForMultistoryStairs(stairs: Stairs) -> bool: ...
    def ConnectLevels(self, levelIds: ISet) -> None: ...
    def DisconnectLevels(self, levelIds: ISet) -> None: ...
    def GetAllStairsIds(self) -> ISet: ...
    def GetStairsPlacementLevels(self, stairs: Stairs) -> ISet: ...
    def IsPinned(self, stairs: Stairs) -> bool: ...
    def GetAllConnectedLevels(self) -> ISet: ...
    def Unpin(self, levelId: ElementId) -> Stairs: ...
    def Pin(self, levelId: ElementId) -> Stairs: ...
    def GetStairsOnLevel(self, levelId: ElementId) -> Stairs: ...
    def CanConnectLevel(self, levelId: ElementId) -> bool: ...
    def CanDisconnectLevel(self, levelId: ElementId) -> bool: ...


class Stairs(Element):
    @property
    def ActualRiserHeight(self) -> float: ...
    @property
    def ActualTreadDepth(self) -> float: ...
    @ActualTreadDepth.setter
    def ActualTreadDepth(self, actualTreadDepth: float) -> None: ...
    @property
    def ActualRisersNumber(self) -> int: ...
    @property
    def DesiredRisersNumber(self) -> int: ...
    @DesiredRisersNumber.setter
    def DesiredRisersNumber(self, numberOfRisers: int) -> None: ...
    @property
    def BaseElevation(self) -> float: ...
    @property
    def TopElevation(self) -> float: ...
    @property
    def Height(self) -> float: ...
    @Height.setter
    def Height(self, stairsHeight: float) -> None: ...
    @property
    def ActualTreadsNumber(self) -> int: ...
    @property
    def NumberOfStories(self) -> int: ...
    @property
    def MultistoryStairsId(self) -> ElementId: ...
    def IsInEditMode(self) -> bool: ...
    def IsByComponent(document: Document, stairsId: ElementId) -> bool: ...
    def GetStairsRuns(self) -> ICollection: ...
    def GetStairsLandings(self) -> ICollection: ...
    def GetStairsSupports(self) -> ICollection: ...
    def GetAssociatedRailings(self) -> ICollection: ...


class StairsComponentConnection:
    @property
    def ElementId(self) -> ElementId: ...
    @property
    def PeerElementId(self) -> ElementId: ...
    @property
    def ConnectionType(self) -> StairsComponentConnectionEndType: ...
    @property
    def PeerConnectionType(self) -> StairsComponentConnectionEndType: ...
    @property
    def IsValidObject(self) -> bool: ...
    def Dispose(self) -> None: ...


class StairsLanding(Element):
    @property
    def Thickness(self) -> float: ...
    @property
    def BaseElevation(self) -> float: ...
    @BaseElevation.setter
    def BaseElevation(self, height: float) -> None: ...
    @property
    def IsAutomaticLanding(self) -> bool: ...
    def CreateAutomaticLanding(document: Document, firstRunId: ElementId, secondRunId: ElementId) -> List[ElementId]: ...
    def CanCreateAutomaticLanding(document: Document, firstRunId: ElementId, secondRunId: ElementId) -> bool: ...
    def CreateSketchedLanding(document: Document, stairsId: ElementId, curveLoop: CurveLoop, baseElevation: float) -> StairsLanding: ...
    def CreateSketchedLandingWithSlopeData(document: Document, stairsId: ElementId, curveLoop: List[SketchedStairsCurveData], baseElevation: float) -> StairsLanding: ...
    def GetFootprintBoundary(self) -> CurveLoop: ...
    def SetSketchedLandingBoundaryAndPath(self, document: Document, boundaryCurveLoop: CurveLoop, pathCurveLoop: CurveLoop) -> None: ...
    def GetStairs(self) -> Stairs: ...
    def GetAllSupports(self) -> List[ElementId]: ...
    def GetStairsPath(self) -> CurveLoop: ...
    def GetConnections(self) -> List[StairsComponentConnection]: ...


class StairsLandingType(ElementType):
    @property
    def IsMonolithic(self) -> bool: ...
    @property
    def Thickness(self) -> float: ...
    @Thickness.setter
    def Thickness(self, thickness: float) -> None: ...


class StairsPath(Element):
    @property
    def UpText(self) -> str: ...
    @UpText.setter
    def UpText(self, upText: str) -> None: ...
    @property
    def DownText(self) -> str: ...
    @DownText.setter
    def DownText(self, downText: str) -> None: ...
    @property
    def DownTextOffset(self) -> XYZ: ...
    @DownTextOffset.setter
    def DownTextOffset(self, downTextOffset: XYZ) -> None: ...
    @property
    def UpTextOffset(self) -> XYZ: ...
    @UpTextOffset.setter
    def UpTextOffset(self, upTextOffset: XYZ) -> None: ...
    @property
    def StairsPathOffset(self) -> float: ...
    @StairsPathOffset.setter
    def StairsPathOffset(self, stairsPathOffset: float) -> None: ...
    @property
    def StairsId(self) -> LinkElementId: ...
    @property
    def TextOrientation(self) -> StairsTextOrientation: ...
    @TextOrientation.setter
    def TextOrientation(self, textOrientation: StairsTextOrientation) -> None: ...
    @property
    def ShowUpText(self) -> bool: ...
    @ShowUpText.setter
    def ShowUpText(self, showUpText: bool) -> None: ...
    @property
    def ShowDownText(self) -> bool: ...
    @ShowDownText.setter
    def ShowDownText(self, showDownText: bool) -> None: ...
    def Create(document: Document, stairsId: LinkElementId, typeId: ElementId, planViewId: ElementId) -> StairsPath: ...
    def CreateOnMultistoryStairs(document: Document, multistoryStairsId: LinkElementId, typeId: ElementId) -> List[StairsPath]: ...
    def CanCreateOnMultistoryStairs(document: Document, multistoryStairsId: LinkElementId) -> bool: ...


class StairsPathType(ElementType):
    @property
    def DistanceToCutMark(self) -> float: ...
    @DistanceToCutMark.setter
    def DistanceToCutMark(self, distanceToCutMark: float) -> None: ...
    @property
    def StartExtension(self) -> float: ...
    @StartExtension.setter
    def StartExtension(self, startExtension: float) -> None: ...
    @property
    def ArrowheadTypeId(self) -> ElementId: ...
    @ArrowheadTypeId.setter
    def ArrowheadTypeId(self, arrowheadTypeId: ElementId) -> None: ...
    @property
    def StartSymbolTypeId(self) -> ElementId: ...
    @StartSymbolTypeId.setter
    def StartSymbolTypeId(self, startSymbolTypeId: ElementId) -> None: ...
    @property
    def LineShapeAtCorner(self) -> StairsPathLineShapeAtCorner: ...
    @LineShapeAtCorner.setter
    def LineShapeAtCorner(self, lineShapeAtCorner: StairsPathLineShapeAtCorner) -> None: ...
    @property
    def StairsPathDirection(self) -> StairsPathDirection: ...
    @property
    def EndAtRiser(self) -> bool: ...
    @EndAtRiser.setter
    def EndAtRiser(self, endAtRiser: bool) -> None: ...
    @property
    def DrawForEachRun(self) -> bool: ...
    @DrawForEachRun.setter
    def DrawForEachRun(self, drawForEachRun: bool) -> None: ...
    @property
    def ShowArrowheadToCutMark(self) -> bool: ...
    @ShowArrowheadToCutMark.setter
    def ShowArrowheadToCutMark(self, showArrowheadToCutMark: bool) -> None: ...
    @property
    def StartFromRiser(self) -> bool: ...
    @StartFromRiser.setter
    def StartFromRiser(self, startFromRiser: bool) -> None: ...
    @property
    def FullStepArrow(self) -> bool: ...
    @FullStepArrow.setter
    def FullStepArrow(self, fullStepArrow: bool) -> None: ...


class StairsRun(Element):
    @property
    def StairsRunStyle(self) -> StairsRunStyle: ...
    @property
    def Height(self) -> float: ...
    @property
    def BaseElevation(self) -> float: ...
    @BaseElevation.setter
    def BaseElevation(self, baseElevation: float) -> None: ...
    @property
    def TopElevation(self) -> float: ...
    @TopElevation.setter
    def TopElevation(self, topElevation: float) -> None: ...
    @property
    def ActualRunWidth(self) -> float: ...
    @ActualRunWidth.setter
    def ActualRunWidth(self, runWidth: float) -> None: ...
    @property
    def ActualRisersNumber(self) -> int: ...
    @property
    def ActualTreadsNumber(self) -> int: ...
    @property
    def ExtensionBelowRiserBase(self) -> float: ...
    @ExtensionBelowRiserBase.setter
    def ExtensionBelowRiserBase(self, extendBelowRiserBase: float) -> None: ...
    @property
    def ExtensionBelowTreadBase(self) -> float: ...
    @ExtensionBelowTreadBase.setter
    def ExtensionBelowTreadBase(self, extendBelowTreadBase: float) -> None: ...
    @property
    def BeginsWithRiser(self) -> bool: ...
    @BeginsWithRiser.setter
    def BeginsWithRiser(self, beingWithRiser: bool) -> None: ...
    @property
    def EndsWithRiser(self) -> bool: ...
    @EndsWithRiser.setter
    def EndsWithRiser(self, endWithRiser: bool) -> None: ...
    @property
    def LocationLineJustification(self) -> StairsRunJustification: ...
    @LocationLineJustification.setter
    def LocationLineJustification(self, pathJustification: StairsRunJustification) -> None: ...
    def SetLocationPathForStraightRun(stairsRun: StairsRun, locationPath: Line) -> bool: ...
    def SetLocationPathForSpiralRun(stairsRun: StairsRun, center: XYZ, radius: float, startAngle: float, includedAngle: float, clockwise: bool, justification: StairsRunJustification) -> bool: ...
    def GetNumberSystemReference(self, referenceOption: StairsNumberSystemReferenceOption) -> Reference: ...
    def GetConnections(self) -> List[StairsComponentConnection]: ...
    def GetLeftSupports(self) -> List[ElementId]: ...
    def GetRightSupports(self) -> List[ElementId]: ...
    def GetAllSupports(self) -> List[ElementId]: ...
    def GetStairs(self) -> Stairs: ...
    def GetStairsPath(self) -> CurveLoop: ...
    def GetFootprintBoundary(self) -> CurveLoop: ...
    def CreateSketchedRun(document: Document, stairsId: ElementId, baseElevation: float, boundaryCurves: List[Curve], riserCurves: List[Curve], stairsPath: List[Curve]) -> StairsRun: ...
    def CreateSketchedRunWithSlopeData(document: Document, stairsId: ElementId, baseElevation: float, boundaryCurves: List[SketchedStairsCurveData], riserCurves: List[Curve], stairsPath: List[Curve]) -> StairsRun: ...
    def CreateStraightRun(document: Document, stairsId: ElementId, locationPath: Line, justification: StairsRunJustification) -> StairsRun: ...
    def CreateSpiralRun(document: Document, stairsId: ElementId, center: XYZ, radius: float, startAngle: float, includedAngle: float, clockwise: bool, justification: StairsRunJustification) -> StairsRun: ...


class StairsRunType(ElementType):
    @property
    def IsMonolithic(self) -> bool: ...
    @property
    def HasTreads(self) -> bool: ...
    @HasTreads.setter
    def HasTreads(self, hasTreads: bool) -> None: ...
    @property
    def HasRisers(self) -> bool: ...
    @HasRisers.setter
    def HasRisers(self, hasRisers: bool) -> None: ...
    @property
    def StructuralDepth(self) -> float: ...
    @StructuralDepth.setter
    def StructuralDepth(self, structuralDepth: float) -> None: ...
    @property
    def TotalDepth(self) -> float: ...
    @property
    def UndersideSurfaceStyle(self) -> StairsUndersideSurfaceStyle: ...
    @UndersideSurfaceStyle.setter
    def UndersideSurfaceStyle(self, undersideSurfaceStyle: StairsUndersideSurfaceStyle) -> None: ...
    @property
    def MaterialId(self) -> ElementId: ...
    @MaterialId.setter
    def MaterialId(self, materialId: ElementId) -> None: ...
    @property
    def TreadThickness(self) -> float: ...
    @TreadThickness.setter
    def TreadThickness(self, thickness: float) -> None: ...
    @property
    def NosingLength(self) -> float: ...
    @NosingLength.setter
    def NosingLength(self, length: float) -> None: ...
    @property
    def NosingProfile(self) -> ElementId: ...
    @NosingProfile.setter
    def NosingProfile(self, profile: ElementId) -> None: ...
    @property
    def TreadProfile(self) -> ElementId: ...
    @TreadProfile.setter
    def TreadProfile(self, profile: ElementId) -> None: ...
    @property
    def TreadNosingPosition(self) -> TreadNosingPosition: ...
    @TreadNosingPosition.setter
    def TreadNosingPosition(self, nosingPosition: TreadNosingPosition) -> None: ...
    @property
    def IsSlanted(self) -> bool: ...
    @IsSlanted.setter
    def IsSlanted(self, slanted: bool) -> None: ...
    @property
    def RiserThickness(self) -> float: ...
    @RiserThickness.setter
    def RiserThickness(self, length: float) -> None: ...
    @property
    def RiserProfile(self) -> ElementId: ...
    @RiserProfile.setter
    def RiserProfile(self, profile: ElementId) -> None: ...
    @property
    def RiserToTreadConnect(self) -> RiserToTreadConnectionOption: ...
    @RiserToTreadConnect.setter
    def RiserToTreadConnect(self, connect: RiserToTreadConnectionOption) -> None: ...


class StairsType(ElementType):
    @property
    def MaxRiserHeight(self) -> float: ...
    @MaxRiserHeight.setter
    def MaxRiserHeight(self, MaxRiserHeight: float) -> None: ...
    @property
    def MinTreadDepth(self) -> float: ...
    @MinTreadDepth.setter
    def MinTreadDepth(self, minTreadDepth: float) -> None: ...
    @property
    def MinRunWidth(self) -> float: ...
    @MinRunWidth.setter
    def MinRunWidth(self, MinRunWidth: float) -> None: ...
    @property
    def NotchExtension(self) -> float: ...
    @NotchExtension.setter
    def NotchExtension(self, NotchExtension: float) -> None: ...
    @property
    def NotchThickness(self) -> float: ...
    @NotchThickness.setter
    def NotchThickness(self, NotchThickness: float) -> None: ...
    @property
    def NotchHorizontalGap(self) -> float: ...
    @NotchHorizontalGap.setter
    def NotchHorizontalGap(self, NotchHorizontalGap: float) -> None: ...
    @property
    def NotchVerticalGap(self) -> float: ...
    @NotchVerticalGap.setter
    def NotchVerticalGap(self, NotchVerticalGap: float) -> None: ...
    @property
    def RunType(self) -> ElementId: ...
    @RunType.setter
    def RunType(self, RunType: ElementId) -> None: ...
    @property
    def LandingType(self) -> ElementId: ...
    @LandingType.setter
    def LandingType(self, LandingType: ElementId) -> None: ...
    @property
    def EndConnectionType(self) -> StairsEndConnectionType: ...
    @EndConnectionType.setter
    def EndConnectionType(self, EndConnectionType: StairsEndConnectionType) -> None: ...
    @property
    def ConstructionMethod(self) -> StairsConstructionMethod: ...
    @property
    def LeftSideSupportType(self) -> ElementId: ...
    @LeftSideSupportType.setter
    def LeftSideSupportType(self, leftSideStringerTypeId: ElementId) -> None: ...
    @property
    def RightSideSupportType(self) -> ElementId: ...
    @RightSideSupportType.setter
    def RightSideSupportType(self, rightSideStringerTypeId: ElementId) -> None: ...
    @property
    def LeftLateralOffset(self) -> float: ...
    @LeftLateralOffset.setter
    def LeftLateralOffset(self, offset: float) -> None: ...
    @property
    def RightLateralOffset(self) -> float: ...
    @RightLateralOffset.setter
    def RightLateralOffset(self, offset: float) -> None: ...
    @property
    def MiddleSupportsNumber(self) -> int: ...
    @MiddleSupportsNumber.setter
    def MiddleSupportsNumber(self, supportsNumber: int) -> None: ...
    @property
    def MiddleSupportType(self) -> ElementId: ...
    @MiddleSupportType.setter
    def MiddleSupportType(self, supportType: ElementId) -> None: ...
    @property
    def HasMiddleSupports(self) -> bool: ...
    @HasMiddleSupports.setter
    def HasMiddleSupports(self, hasSupports: bool) -> None: ...


class TopRail(ContinuousRail):


class TopRailType(ContinuousRailType):


class SiteSubRegion:
    @property
    def TopographySurface(self) -> TopographySurface: ...
    @property
    def HostId(self) -> ElementId: ...
    @property
    def IsValidObject(self) -> bool: ...
    @overload
    def Create(document: Document, curveLoops: List[CurveLoop], hostTopoSurfaceId: ElementId) -> SiteSubRegion: ...
    @overload
    def Create(document: Document, curveLoops: List[CurveLoop]) -> SiteSubRegion: ...
    def IsValidBoundary(curveLoops: List[CurveLoop]) -> bool: ...
    def GetBoundary(self) -> List[CurveLoop]: ...
    def SetBoundary(self, curveLoops: List[CurveLoop]) -> None: ...
    def Dispose(self) -> None: ...


class Railing(Element):
    @property
    def HostId(self) -> ElementId: ...
    @HostId.setter
    def HostId(self, hostId: ElementId) -> None: ...
    @property
    def HasHost(self) -> bool: ...
    @property
    def Flipped(self) -> bool: ...
    @property
    def TopRail(self) -> ElementId: ...
    @property
    def IsDefault(self) -> bool: ...
    @property
    def CanReset(self) -> bool: ...
    @overload
    def Create(document: Document, multistoryStairsId: ElementId, levelId: ElementId, railingTypeId: ElementId, placePosition: RailingPlacementPosition) -> ISet: ...
    @overload
    def Create(document: Document, curveLoop: CurveLoop, railingTypeId: ElementId, baseLevelId: ElementId) -> Railing: ...
    @overload
    def Create(document: Document, stairsOrRampId: ElementId, railingTypeId: ElementId, placePosition: RailingPlacementPosition) -> ICollection: ...
    def GetPath(self) -> List[Curve]: ...
    def SetPath(self, curveLoop: CurveLoop) -> None: ...
    def RailingCanBeHostedByElement(self, hostId: ElementId) -> bool: ...
    def GetHandRails(self) -> List[ElementId]: ...
    def Reset(self) -> None: ...
    def Flip(self) -> None: ...
    def RemoveHost(self) -> None: ...
    def GetMultistoryStairsPlacementLevels(self) -> ISet: ...
    def SetMultistoryStairsPlacementLevels(self, levelIds: ISet) -> None: ...
    def GetSubelementOnLevel(self, levelId: ElementId) -> Subelement: ...
    def ResetSupportPosition(self) -> None: ...
    def IsValidHostForNewRailing(document: Document, elementId: ElementId) -> bool: ...
    def IsValidPathForRailing(curveLoop: CurveLoop) -> bool: ...


class RailingType(ElementType):
    @property
    def BalusterPlacement(self) -> BalusterPlacement: ...
    @property
    def RailStructure(self) -> NonContinuousRailStructure: ...
    @property
    def PrimaryHandRailPosition(self) -> HandRailPosition: ...
    @PrimaryHandRailPosition.setter
    def PrimaryHandRailPosition(self, primaryHandRailPosition: HandRailPosition) -> None: ...
    @property
    def SecondaryHandRailPosition(self) -> HandRailPosition: ...
    @SecondaryHandRailPosition.setter
    def SecondaryHandRailPosition(self, secondaryHandRailPosition: HandRailPosition) -> None: ...
    @property
    def TopRailHeight(self) -> float: ...
    @TopRailHeight.setter
    def TopRailHeight(self, height: float) -> None: ...
    @property
    def TopRailType(self) -> ElementId: ...
    @TopRailType.setter
    def TopRailType(self, topRailType: ElementId) -> None: ...
    @property
    def PrimaryHandrailType(self) -> ElementId: ...
    @PrimaryHandrailType.setter
    def PrimaryHandrailType(self, handRailTypeId: ElementId) -> None: ...
    @property
    def SecondaryHandrailType(self) -> ElementId: ...
    @SecondaryHandrailType.setter
    def SecondaryHandrailType(self, handRailTypeId: ElementId) -> None: ...
    @property
    def PrimaryHandrailLateralOffset(self) -> float: ...
    @property
    def SecondaryHandrailLateralOffset(self) -> float: ...
    @property
    def PrimaryHandrailHeight(self) -> float: ...
    @property
    def SecondaryHandrailHeight(self) -> float: ...


class StairsTextOrientation:
    Horizontal = 0
    Vertical = 1


class StairsPathLineShapeAtCorner:
    Straight = 0
    Curved = 1


class CutMarkSymbol:
    #None = 0
    Zigzag = 1
    Curve = 2


class CutLineType:
    SingleLine = 0
    DoubleLine = 1


class StairsNumberSystemReferenceOption:
    Center = 0
    Left = 1
    Right = 2
    LeftQuarter = 3
    RightQuarter = 4


class StairsPathDirection:
    AlwaysUp = 0
    AutomaticUpDown = 1


class StairsEndConnectionType:
    StraightCut = 0
    Notch = 1


class StairsEndNotchOption:
    FullRunWidth = 0
    Custom = 1


class StairsRunJustification:
    Left = 0
    Center = 1
    Right = 2
    LeftExterior = 3
    RightExterior = 4


class StairsWinderStyle:
    Balanced = 0
    SinglePoint = 2


class StairsRunStyle:
    Winder = 1
    Sketched = 2
    Straight = 3
    Spiral = 4


class StairsUndersideSurfaceStyle:
    Stepped = 0
    Smooth = 1


class StairsSupportTopsideSurfaceType:
    Closed = 0
    Open = 1


class StairsComponentConnectionEndType:
    ET_Landing = 0
    ET_RunStart = 1
    ET_RunEnd = 2


class WinderPathResult:
    Success = 0
    NumberOutOfRange = 1
    Unbound = 2
    Noncontinuous = 3
    NotOpenLoop = 4
    TooShort = 5
    ColinearOrOverlap = 6
    SelfIntersect = 7
    InvalidCurveType = 8
    NotSupported = 9


class StairsConstructionMethod:
    Assembled = 0
    CastInPlace = 1
    Precast = 2


class TreadNosingPosition:
    FrontOnly = 0
    FrontAndLeft = 1
    FrontAndRight = 2
    FrontLeftAndRight = 3


class RiserToTreadConnectionOption:
    RiserBehindTread = 0
    TreadUnderRiser = 1
    JoinAll = 2


class SketchedCurveSlopeOption:
    Auto = 0
    Flat = 1
    Sloped = 2


class TopographyEditScope(EditScope):
    def __init__(self, document: Document, transactionName: str): ...
    def Start(self, topoSurfaceId: ElementId) -> ElementId: ...


class TopographyLinkType(ElementType):
    def Reload(self) -> LinkLoadResult: ...
